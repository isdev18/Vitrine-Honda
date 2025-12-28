// =============================
//        ELEMENTOS
// =============================
const container = document.getElementById("products");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("searchInput");

// =============================
// CONTROLE DE FLUXO
// =============================
let motoSelecionada = "";
let origemAcao = ""; // "consorcio" ou "financiamento"
let detalhesAtivos = null;

// =============================
// MODAL INFORMATIVO
// =============================
const modal = document.createElement("div");
modal.id = "modalInfo";
modal.style.cssText = `
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,.6);
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

modal.innerHTML = `
  <div style="
    position: relative;
    background:#fff;
    max-width:420px;
    width:90%;
    border-radius:10px;
    padding:22px;
    font-family:Arial, Helvetica, sans-serif;
  ">

    <button id="fecharModal" style="
      position:absolute;
      top:10px;
      right:12px;
      background:none;
      border:none;
      font-size:18px;
      cursor:pointer;
    ">✕</button>

    <h3 style="margin-bottom:10px;">📌 Importante</h3>

    <p style="font-size:14px; line-height:1.45; color:#333;">
      Tu vai entender as <b>3 modalidades</b> que entregam a moto pelo Consórcio:
      <br><br>

      <b>SORTEIO ATIVO R$ 0,00</b><br>
      Todo mês entrega motos sem lance
      <br><br>

      <b>SORTEIO DO LANCE FIXO 15%</b><br>
      A Honda define o percentual e sorteia mensalmente
      <br><br>

      <b>LANCE LIVRE</b><br>
      Lances mais altos, sem obrigatoriedade.
      Analisamos todo mês para contemplar mais rápido.
      <br><br>

     
    </p>

    <button id="btnContinuar" style="
      margin-top:14px;
      width:100%;
      padding:13px;
      background:#d50000;
      color:#fff;
      border:none;
      border-radius:6px;
      font-weight:bold;
      font-size:15px;
      cursor:pointer;
    ">
      Continuar
    </button>
  </div>
`;

document.body.appendChild(modal);

// =============================
// AÇÕES DO MODAL
// =============================
document.getElementById("fecharModal").onclick = () => {
  modal.style.display = "none";
};

document.getElementById("btnContinuar").onclick = () => {
  modal.style.display = "none";

  // 👉 FINANCIAMENTO → FORM
  if (origemAcao === "financiamento") {
    window.location.href =
      `form.html?moto=${encodeURIComponent(motoSelecionada)}`;
  }

  // 👉 CONSÓRCIO → ABRE PARCELAS
  if (origemAcao === "consorcio" && detalhesAtivos) {
    detalhesAtivos.style.display = "block";
  }
};

// =============================
//   RENDERIZA PRODUTOS
// =============================
function renderProducts(lista = PRODUCTS) {
  if (!container) return;

  container.innerHTML = "";

  lista.filter(p => p.ativo).forEach(prod => {
    const card = document.createElement("div");
    card.className = "card";

    const consorcios = prod.consorcios || [];

    const consorciosHTML = consorcios.map(c => `
      <option value="${c.plano} - R$ ${c.valor}">
        ${c.plano} de R$ ${c.valor}
      </option>
    `).join("");

    card.innerHTML = `
      <img src="${prod.imagem}" alt="${prod.nome}">
      <h3>${prod.nome}</h3>
      <p class="descricao">${prod.descricao}</p>
      <p class="preco">${prod.preco}</p>

      <button class="btn saiba-mais">Planos de Consórcio</button>
      <button class="btn financiamento">Simular financiamento</button>

      <div class="detalhes" style="display:none;">
        <label>Plano de consórcio</label>
        <select>
          <option value="">Selecione</option>
          ${consorciosHTML}
        </select>
      </div>
    `;

    container.appendChild(card);

    const btnConsorcio = card.querySelector(".saiba-mais");
    const btnFinanciamento = card.querySelector(".financiamento");
    const detalhes = card.querySelector(".detalhes");

    // CONSÓRCIO
    btnConsorcio.addEventListener("click", () => {
      motoSelecionada = prod.nome;
      origemAcao = "consorcio";
      detalhesAtivos = detalhes;
      modal.style.display = "flex";
    });

    // FINANCIAMENTO
    btnFinanciamento.addEventListener("click", () => {
      motoSelecionada = prod.nome;
      origemAcao = "financiamento";
      detalhesAtivos = null;
      modal.style.display = "flex";
    });
  });
}

// =============================
// BUSCA
// =============================
if (searchInput) {
  searchInput.addEventListener("input", () => {
    const termo = searchInput.value.toLowerCase();
    renderProducts(
      PRODUCTS.filter(p =>
        p.nome.toLowerCase().includes(termo)
      )
    );
  });
}

// =============================
// MENU
// =============================
if (menuBtn && menu) {
  menuBtn.addEventListener("click", e => {
    e.stopPropagation();
    menu.classList.toggle("open");
  });

  document.addEventListener("click", e => {
    if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
      menu.classList.remove("open");
    }
  });
}

// =============================
renderProducts();
