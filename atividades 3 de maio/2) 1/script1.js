document.getElementById('mudarCorBtn').addEventListener('click', function() {
    const cores = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff', '#a0c4ff', '#bdb2ff', '#ffc6ff'];
    const corAtual = document.body.style.backgroundColor;
    let novaCor;

    do {
        novaCor = cores[Math.floor(Math.random() * cores.length)];
    } while (novaCor === corAtual); // Garante que a nova cor seja diferente da atual

    document.body.style.backgroundColor = novaCor;
});