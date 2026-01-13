function selectCharacter(characterId) {
  localStorage.setItem('role', 'player');
  localStorage.setItem('character', characterId);

  alert(`Você escolheu ${characterId.toUpperCase()}`);
  // window.location.href = "ficha.html";
}

function enterDM() {
  const senha = prompt("Digite a senha do DM:");

  if (senha === "ritualfinal") {
    localStorage.setItem('role', 'dm');
    alert("Bem-vinda, Mestra.");
    // window.location.href = "dm.html";
  } else {
    alert("O Outro Lado não te reconhece.");
  }
}

// CONFIG SUPABASE
const SUPABASE_URL = "https://ejpobxmuvubxjaofwnue.supabase.com";
const SUPABASE_KEY = "sb_publishable_vsAqJjiLD2twwQkE5qTMYA_9PH2mmY8";

// IMPORTANTE: NÃO use o nome supabase aqui
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// TESTE
async function teste() {
  const { data, error } = await db
    .from('players')
    .select('*');

  console.log("DATA:", data);
  console.log("ERROR:", error);
}

teste();

