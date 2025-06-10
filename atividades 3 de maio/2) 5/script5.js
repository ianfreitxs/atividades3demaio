document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    document.getElementById('exibirNome').textContent = nome;
    document.getElementById('exibirEmail').textContent = email;
    document.getElementById('exibirMensagem').textContent = mensagem;

    document.getElementById('dadosExibidos').style.display = 'block'; // Mostra a div com os dados

    // Opcional: Limpar o formulário após o envio
    this.reset();
});