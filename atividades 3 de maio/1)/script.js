function executarDepoisDeUmTempo(callback) {
    console.log("Iniciando a operação...");
    setTimeout(function() {
        console.log("Operação concluída!");
        callback("Dados processados"); // Chama o callback com um resultado
    }, 2000); // Espera 2 segundos
}

function minhaCallback(resultado) {
    const mensagemElement = document.getElementById("mensagem");
    mensagemElement.textContent = "Callback executado! Resultado: " + resultado;
    console.log("A função de callback foi executada com o resultado: " + resultado);
}
