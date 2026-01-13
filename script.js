// ==========================
// CONFIGURAÇÃO DO DM
// ==========================
const DM_PASSWORD = "teatro-maldito";

// ==========================
// CONFIG SUPABASE
// ==========================
const SUPABASE_URL = "https://ejpobxmuvubxjaofwnue.supabase.co";
const SUPABASE_KEY = "sb_publishable_vsAqJjiLD2twwQkE5qTMYA_9PH2mmY8";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================
// SELECIONAR PERSONAGEM
// ==========================
async function selectCharacter(nomePersonagem) {
  const { data, error } = await db
    .from("personagens")
    .select("*")
    .eq("nome", nomePersonagem)
    .single();

  if (error) {
    alert("Erro ao buscar personagem.");
    console.error(error);
    return;
  }

  if (data.is_taken) {
    alert("Esse personagem já foi escolhido.");
    return;
  }

  const { error: updateError } = await db
    .from("personagens")
    .update({ is_taken: true })
    .eq("id", data.id);

  if (updateError) {
    alert("Erro ao reservar personagem.");
    console.error(updateError);
    return;
  }

  localStorage.setItem("role", "player");
  localStorage.setItem("personagem_id", data.id);
  localStorage.setItem("personagem_nome", data.nome);

  alert(`Você escolheu ${data.nome}`);
  window.location.href = "ficha.html";
}

// ==========================
// ENTRAR COMO DM
// ==========================
function enterDM() {
  const senha = prompt("Digite a senha do DM:");

  if (senha === DM_PASSWORD) {
    localStorage.setItem("role", "dm");
    alert("Bem-vinda, Mestra.");
    mostrarBotaoReset();
  } else {
    alert("O Outro Lado não te reconhece.");
  }
}

// ==========================
// MOSTRAR BOTÃO RESET (DM)
// ==========================
function mostrarBotaoReset() {
  const btn = document.getElementById("resetMesaBtn");
  if (btn) btn.style.display = "block";
}

// ==========================
// RESETAR MESA (DM)
// ==========================
async function resetarMesa() {
  const confirmar = confirm("Tem certeza que deseja resetar todos os personagens?");
  if (!confirmar) return;

  const { error } = await db
    .from("personagens")
    .update({ is_taken: false })
    .neq("id", 0);

  if (error) {
    alert("Erro ao resetar a mesa.");
    console.error(error);
    return;
  }

  localStorage.clear();
  alert("Mesa resetada com sucesso!");
  location.reload();
}



