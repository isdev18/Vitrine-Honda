document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formFinanciamento");

  // Puxa moto da URL
  const params = new URLSearchParams(window.location.search);
  const moto = params.get("moto");
  if (moto) document.getElementById("moto").value = moto;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // ⛔ impede envio automático

    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const telefone = document.getElementById("telefone").value;
    const email = document.getElementById("email").value || "Não informado";
    const entrada = document.getElementById("entrada").value || "Não informada";
    const cnh = document.getElementById("cnh").value;
    const motoSelecionada = document.getElementById("moto").value;

    const mensagem =
`📄 *Solicitação de simulação de financiamento*

👤 Nome: ${nome}
🪪 CPF: ${cpf}
📞 Telefone: ${telefone}
📧 E-mail: ${email}

🏍️ Moto: ${motoSelecionada}
💰 Entrada: ${entrada}
🪪 CNH: ${cnh}`;

    const whatsappURL =
      "https://wa.me/5575998646978?text=" +
      encodeURIComponent(mensagem);

    // ✅ SÓ AQUI abre o WhatsApp
    window.open(whatsappURL, "_blank");
  });
});
