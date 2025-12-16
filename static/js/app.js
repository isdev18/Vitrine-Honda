// =============================
//        ELEMENTOS
// =============================
const container = document.getElementById("products");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const searchInput = document.getElementById("searchInput");

// =============================
//   RENDERIZA PRODUTOS
// =============================
function renderProducts(lista = PRODUCTS) {
    if (!container) return;

    container.innerHTML = "";

    lista
        .filter(p => p.ativo)
        .forEach(prod => {
            const card = document.createElement("div");
            card.className = "card";

            const consorcios = prod.consorcios || [];

            const consorciosHTML = consorcios.length
                ? consorcios.map(c => `
                    <option value="${c.plano} - R$ ${c.valor}">
                        ${c.plano} de R$ ${c.valor}
                    </option>
                `).join("")
                : `<option disabled>Nenhum plano disponível</option>`;

            card.innerHTML = `
                <img src="${prod.imagem}" alt="${prod.nome}">
                <h3>${prod.nome}</h3>
                <p class="descricao">${prod.descricao}</p>

                ${
                    prod.preco
                        ? `<p class="preco">R$ ${prod.preco.toLocaleString("pt-BR")}</p>`
                        : `<p class="preco">Consulte valores</p>`
                }

                <button class="btn saiba-mais">Saiba mais</button>

                <div class="detalhes">
                    <label>Plano de consórcio</label>
                    <select class="select-consorcio">
                        <option value="">Selecione</option>
                        ${consorciosHTML}
                    </select>

                    <a class="btn whatsapp" target="_blank">
                        Falar no WhatsApp
                    </a>
                </div>
            `;

            container.appendChild(card);

            // =============================
            // INTERAÇÕES DO CARD
            // =============================
            const btnSaibaMais = card.querySelector(".saiba-mais");
            const detalhes = card.querySelector(".detalhes");
            const selectConsorcio = card.querySelector(".select-consorcio");
            const btnWhatsapp = card.querySelector(".whatsapp");

            detalhes.style.display = "none";
            btnWhatsapp.style.display = "none";

            btnSaibaMais.addEventListener("click", () => {
                detalhes.style.display =
                    detalhes.style.display === "none" ? "block" : "none";
            });

            selectConsorcio.addEventListener("change", () => {
                if (selectConsorcio.value) {
                    const msg = `Olá! Tenho interesse na *${prod.nome}*
Plano de consórcio: *${selectConsorcio.value}*`;

                    btnWhatsapp.href =
                        "https://wa.me/5575998646978?text=" +
                        encodeURIComponent(msg);

                    btnWhatsapp.style.display = "block";
                } else {
                    btnWhatsapp.style.display = "none";
                }
            });
        });
}

// =============================
// BUSCA
// =============================
if (searchInput) {
    searchInput.addEventListener("input", () => {
        const termo = searchInput.value.toLowerCase();

        const filtrados = PRODUCTS.filter(prod =>
            prod.nome.toLowerCase().includes(termo)
        );

        renderProducts(filtrados);
    });
}

// =============================
// MENU HAMBÚRGUER
// =============================
if (menuBtn && menu) {
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("open");
        menuBtn.textContent = menu.classList.contains("open") ? "✖" : "☰";
    });

    document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
            menu.classList.remove("open");
            menuBtn.textContent = "☰";
        }
    });
}

// =============================
// INICIALIZA
// =============================
renderProducts();
