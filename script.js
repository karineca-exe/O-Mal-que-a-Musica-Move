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
const SUPABASE_URL = "https://ejpobxmuvubxjaofwnue.supabase.co";
const SUPABASE_KEY = "sb_publishable_vsAqJjiLD2twwQkE5qTMYA_9PH2mmY8";

const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function selectCharacter(nomePersonagem) {
  const { data, error } = await db
    .from('personagens')
    .select('*')
    .eq('nome', nomePersonagem)
    .single();

  if (error) {
    alert("Erro ao buscar personagem");
    return;
  }

  if (data.is_taken) {
    alert("Esse personagem já foi escolhido.");
    return;
  }

  await db
    .from('personagens')
    .update({ is_taken: true })
    .eq('id', data.id);

  localStorage.setItem('personagem_id', data.id);

  alert(`Você escolheu ${data.nome}`);
  window.location.href = "ficha.html";
}


