// SUPABASE
const SUPABASE_URL = "https://ejpobxmuvubxjaofwnue.supabase.com";
const SUPABASE_KEY = "SUA_CHAVE_PUBLICA_AQUI";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ESCOLHA DE PERSONAGEM
function escolherPersonagem(personagemId) {
  localStorage.setItem("personagem_id", personagemId);
  localStorage.setItem("role", "player");

  alert("Personagem escolhido. A música começa...");
  window.location.href = "ficha.html";
}

// ENTRADA DO DM
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


