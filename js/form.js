document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário
    // Validação dos campos
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome === "" || email === "" || mensagem === "") {
      alert("Por favor, preencha todos os campos do formulário.");
      return;
    }

    // Envio do formulário
    this.submit(); // Submete o formulário para o arquivo "enviar_email.php"
  });