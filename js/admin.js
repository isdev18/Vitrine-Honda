// ==============================
// BANCO DE DADOS LOCAL
// ==============================
let db = JSON.parse(localStorage.getItem("productsDB")) || PRODUCTS;

function saveDB() {
    localStorage.setItem("productsDB", JSON.stringify(db));
}

// ==============================
// RENDERIZA TABELA ADMIN
// ==============================
function renderAdmin() {
    const table = document.getElementById("adminTable");
    if (!table) return;

    table.innerHTML = `
        <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ativo</th>
            <th>Ações</th>
        </tr>
    `;

    db.forEach((p, i) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${p.id}</td>
            <td>${p.nome}</td>
            <td>R$ ${p.preco}</td>
            <td>${p.ativo ? "Sim" : "Não"}</td>
            <td>
                <button onclick="editProduct(${i})">Editar</button>
                <button onclick="deleteProduct(${i})">Excluir</button>
            </td>
        `;
        table.appendChild(row);
    });
}

// ==============================
// CRUD
// ==============================
function newProduct() {
    const nome = prompt("Nome:");
    const preco = Number(prompt("Preço:"));
    const imagem = prompt("URL da imagem:");

    db.push({
        id: Date.now(),
        nome,
        preco,
        imagem,
        ativo: true
    });

    saveDB();
    renderAdmin();
}

function editProduct(i) {
    const p = db[i];

    p.nome = prompt("Nome:", p.nome);
    p.preco = Number(prompt("Preço:", p.preco));
    p.imagem = prompt("Imagem:", p.imagem);
    p.ativo = confirm("Ativo?");

    saveDB();
    renderAdmin();
}

function deleteProduct(i) {
    if (confirm("Excluir produto?")) {
        db.splice(i, 1);
        saveDB();
        renderAdmin();
    }
}

// ==============================
// MENU MOBILE / TOGGLE SIDEBAR
// ==============================
document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle"); // botão ☰
    const sidebar = document.querySelector(".sidebar");

    if (toggle) {
        toggle.addEventListener("click", () => {
            document.body.classList.toggle("menu-open");
        });
    }

    // fecha ao clicar fora
    document.addEventListener("click", (e) => {
        if (!document.body.classList.contains("menu-open")) return;

        const clickInsideSidebar = sidebar.contains(e.target);
        const clickToggle = toggle.contains(e.target);

        if (!clickInsideSidebar && !clickToggle) {
            document.body.classList.remove("menu-open");
        }
    });

    // ao aumentar a tela, garante que o menu fecha
    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) document.body.classList.remove("menu-open");
    });

    renderAdmin();
});
