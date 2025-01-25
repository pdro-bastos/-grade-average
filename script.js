function calcularMedia() {
    // Calcular as notas dos inputs
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const nota4 = parseFloat(document.getElementById('nota4').value);
    const nota5 = parseFloat(document.getElementById('nota5').value);
    const nota6 = parseFloat(document.getElementById('nota6').value);
    const nota7 = parseFloat(document.getElementById('nota7').value);
    const nota8 = parseFloat(document.getElementById('nota8').value);


// Armazena as notas em um array
const notas = [nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8];

// Calcular a soma das notas usando loop
let soma = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i]; //Adiciona cada nota à soma
}

// Calcular a média
const media = soma /notas.length;

//Exibe o resultado
const resultado = document.getElementById('resultado');
if (media >= 7) {
    resultado.textContent = `Média: ${media.toFixed(2)} - Aprovado! Parabéns!`;
    resultado.style.color = "green";
} else {
    resultado.textContent = `Média: ${media.toFixed(2)} - Reprovado. Tente novamente`;
    resultado.style.color = "red";
}
}
