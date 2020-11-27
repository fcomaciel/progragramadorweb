/*
1. Indique qual o operador correto para testarmos se um valor 
numérico é igual a outro (exemplo: 22 é igual a '22')?
22 == '22'
22 == 22
==
*/
console.log(22 == '22');

/*
2. Na expressão: console.log(10 != '10'); qual o operador utilizado?
Não igual
Desigualdade: ( != )
Diferente comparação de valores
*/
console.log(22 != '22');

/*
3. Desejamos conhecer se um valor é idêntico a outro comparando 
valor e tipo de dados, qual operador usar?
===
==
*/
console.log(22 === '22');

/*
4. Indique operador correto para para verificar se o valor de uma variável 
é diferente de outro comparando valor e tipo de dados, qual operador usar?
!==
!=
*/
console.log(22 !== '22');

/*
5. Qual o operador de concatenação lógica 'e' ?
&& -> Correto
&  -> Errado
array1: d,e,v
*/
let x = 10, y = '5';
if (x === 10 && y === 5) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

/*
6. Qual o operador de concatenação lógica 'ou' ?
|| -> Correto
|  -> Errado
array1< d,e,v
*/
let x = 10, y = '5';
if (x === 10 || y === 5) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

/*
7. Para testar se a expressão let x = 10, y = '5'; tem o valor de 'x' 
maior ou igual a 10, e 'y' tem valor menor que 6 qual o operador de 
comparação devemos utilizar?
*/
let x = 10, y = '5';
if (x >= 10 && y < 6) {
    console.log('Verdadeiro');
} else {
    console.log('Falso');
}

/*
8. O que a expressão console.log(20 === '20'); testa ?
falso
*/
console.log(20 === '20');

/*
9. Qual o resultado da expressão: console.log(10 !== '10');
true
*/
console.log(10 !== '10');

/*
10. Qual a saída na tela do código a seguir?
let x = 10, y = '5';
if (x == 10 || y === 5) {
    console.log('Teste lógico verdadeiro');
} else {
    console.log('Teste lógico falso');
}

Teste lógico verdadeiro
*/
let x = 10, y = '5';
if (x == 10 || y === 5) {
    console.log('Teste lógico verdadeiro');
} else {
    console.log('Teste lógico falso');
}
