/*
TOMADAS DE DECISÃO:
if -> (IF -> SE)
if...else
if...else if (IF ELSE -> SENÃO)
if...else if...else (ELSE -> ENTÃO)
*/
// Testar se num3 é um número par
let num3 = 5;

if (num3 % 2 === 0) {
    console.log('num3 é par.');
} else {
    console.log('num3 é ímpar.');
}

/* Testar se num1 é maior num2, se num2 
   é maior que num1, ou se são iguais. */
let num1 = 11;
let num2 = 11;

if (num1 > num2) {
    console.log('num1 é maior que num2.');
} else if (num2 > num1) {
    console.log('num2 é maior que num1.');
} else {
    console.log('nun1 e num2, são iguais.');
}

/*
Saudação dependendo da hora:
de 0 às 11 -> Bom dia!
de 12 às 17 -> Boa tarde!
de 18 às 23 -> Boa noite!
 */

let hora = 18;

if (hora > 17) {
    console.log('Boa noite!');
}
else if (hora > 11) {
    console.log('Boa tarde!');
}
else {
    console.log('Bom dia!');
}
// De forma mais compacta

let hora = 11;

if (hora > 17) {
    console.log('Boa noite!');
}
else if (hora > 11) {
    console.log('Boa tarde!');
}
else {
    console.log('Bom dia!');
}
