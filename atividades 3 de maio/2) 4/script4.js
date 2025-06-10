document.getElementById('corInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const corDigitada = this.value;
        document.body.style.backgroundColor = corDigitada;
        this.value = ''; // Limpa o campo após aplicar a cor
    }
});