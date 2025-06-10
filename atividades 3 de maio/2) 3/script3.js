let contador = 0;
const valorContador = document.getElementById('valorContador');

document.getElementById('aumentarBtn').addEventListener('click', function() {
    contador++;
    valorContador.textContent = contador;
});

document.getElementById('diminuirBtn').addEventListener('click', function() {
    contador--;
    valorContador.textContent = contador;
});