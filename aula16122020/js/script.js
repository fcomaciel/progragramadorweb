// Functions


let p1 = prompt('Informe um valor numérico: ');
let p2 = prompt('Informe outro valor numérico: ');

function minhaFuncao(p1, p2) {
    return p1 * p2;
}
document.getElementById("resultado").innerHTML = minhaFuncao(p1, p2);

// ‎Função para converter graus Fahrenheit em Celsius:‎
// Fórmula: (5/9) * (fahrenheit -32)


let f = prompt('Qual a temperatura em Fahrenheit: ', 77);

function toCelsius(f) {
  return (5/9) * (f -32);
}
document.getElementById("resultado").innerHTML = toCelsius(f);

// Função sem passagem de argumento

carro();

function carro() {
    var carroNome = "Fusca";
    document.getElementById("resultado").innerHTML = typeof carroNome + " " + carroNome
}
document.getElementById("resultado1").innerHTML = typeof carroNome;

/* EXERCÍCIOS */

// 1. Criar uma função para saudação com "Alô mundo!" sem passagem de parâmetros.

// 2. Criar uma função para somar 2 números passados como parâmetro.

// 3. Criar uma função que pergunte seu nome e idade e escreva em parágrafos 
// do html cada um dos dados recebidos.
