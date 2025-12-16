function abrirModal(img, nome, descricao) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modalImg");
    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");

    if (!modal || !modalImg || !modalTitle || !modalDesc) return;

    modalImg.src = img;
    modalTitle.textContent = nome;
    modalDesc.textContent = descricao;

    modal.style.display = "flex";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
}

window.addEventListener("click", (e) => {
    const modal = document.getElementById("modal");
    if (e.target === modal) modal.style.display = "none";
});
