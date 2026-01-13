const SUPABASE_URL = "https://ejpobxmuvubxjaofwnue.supabase.co";
const SUPABASE_KEY = "sb_publishable_vsAqJjiLD2twwQkE5qTMYA_9PH2mmY8";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

// ID DO PERSONAGEM (por enquanto fixo)
const PERSONAGEM_ID = 1;

// BUSCAR DADOS
async function carregarFicha() {
  // PERSONAGEM
  const { data: personagem, error } = await supabase
    .from("personagens")
    .select("*")
    .eq("id", PERSONAGEM_ID)
    .single();

  if (error) {
    console.error(error);
    return;
  }

  // PREENCHER CABEÇALHO
  document.getElementById("nome-personagem").textContent = personagem.nome;
  document.getElementById("classe-nex").textContent =
    `${personagem.classe} — NEX ${personagem.nex}%`;

  // ATRIBUTOS
  document.getElementById("for").textContent = personagem.for;
  document.getElementById("agi").textContent = personagem.agi;
  document.getElementById("int").textContent = personagem.int;
  document.getElementById("pre").textContent = personagem.pre;
  document.getElementById("vig").textContent = personagem.vig;

  // STATUS
  document.getElementById("pv").textContent = personagem.pv;
  document.getElementById("pe").textContent = personagem.pe;
  document.getElementById("san").textContent = personagem.san;

  // PERÍCIAS
  const { data: pericias } = await supabase
    .from("pericias")
    .select("*")
    .eq("personagem_id", PERSONAGEM_ID);

  const lista = document.getElementById("lista-pericias");
  lista.innerHTML = "";

  pericias.forEach(pericia => {
    const li = document.createElement("li");
    li.textContent = `${pericia.nome} +${pericia.bonus}`;
    lista.appendChild(li);
  });
}

carregarFicha();
