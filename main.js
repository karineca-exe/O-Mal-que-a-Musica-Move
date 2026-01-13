// ==========================
// SUPABASE CONFIG
// ==========================
const SUPABASE_URL = "https://ejpobxmuvubxjaofwnue.supabase.com";
const SUPABASE_KEY = "sb_publishable_vsAqJjiLD2twwQkE5qTMYA_9PH2mmY8";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ==========================
// ESCOLHA DE PERSONAGEM
// ==========================
function escolherPersonagem(personagemId) {
  localStorage.setItem("personagem_id", personagemId);
  localStorage.setItem("role", "player");

  alert("Personagem escolhido. A música começa...");
  window.location.href = "ficha.html";
}

// ==========================
// ENTRADA DO DM
// ==========================
function entrarDM() {
  const senha = prompt("Digite a senha do DM:");

  if (senha === "ritualfinal") {
    localStorage.setItem("role", "dm");
    alert("Bem-vinda, Mestra.");
    // window.location.href = "dm.html";
  } else {
    alert("O Outro Lado não te reconhece.");
  }
}


