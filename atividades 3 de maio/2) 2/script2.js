document.getElementById('exibirTextoBtn').addEventListener('click', function() {
    const campoTexto = document.getElementById('campoTexto');
    const textoExibido = document.getElementById('textoExibido');
    textoExibido.textContent = campoTexto.value;
    campoTexto.value = ''; // Limpa o campo de entrada após exibir o texto
});