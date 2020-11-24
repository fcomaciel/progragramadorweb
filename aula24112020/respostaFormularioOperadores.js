// 1.Multiplique 10 por 5 e exiba o resultado em uma alert no navegador.
// alert(10 * 5) // 50
let n11 = 10;
let n12 = 5;
alert(n11 * n12)

// 2.Divida 10 por 2 e exiba o resultado em um alerta no navegador.
// alert(10 / 5) // 2
let n21 = 10;
let n22 = 5;
alert(n21 / n22)

// 3.Calcule o resto de 15 dividido por 9 e exiba o resultado em um alerta do navegador.
// alert(15 % 9) // 6
let n31 = 15;
let n32 = 9;
alert(n31 % n32);

/*
4.Use o operador de atribuição correto que resultará em x sendo 15 (o mesmo que x = x + y).
x = 10;
y = 5;
x  ?? y;
*/
let x = 10;
let y = 5;
console.log(x  += y); // Operador de atribuição de adição

/*
5.Use o operador de atribuição correto que resultará em x sendo 50 (o mesmo que x = x * y).
x = 10;
y = 5;
x  ?? y;
*/
x = 10;
y = 5;
alert(x  *= y); // Operador de atribuição de multiplicação

// 6.Escreva um código que calcule 2 elevado a 8 potência.
let base = 2, expoente = 8; console.log(2 ** 8);

/*
7.Declare 3 variáveis, 'a', 'b' e 'c', atribua um número inteiro para 'a' e 
para 'b', em seguida elabore um operação onde o 'c' receba o operador atribuição 
de adição calculando 'a' e 'b'.
*/
let a = 5;
let b = 10;
let c = a += b;
console.log(c);

/*
8.Declare 3 variáveis, 'd', 'e' e 'f', atribua um número inteiro para 'd' e 
para 'e', em seguida elabore um operação onde o 'f' receba o operador atribuição 
de multiplicação calculando 'd' e 'e'.
*/
let d = 5;
let e = 10;
let f = d *= e;
console.log(f);

/*
9.Declare 3 variáveis, 'g', 'h' e 'i', atribua um número inteiro para 'g' e 
para 'h', em seguida elabore um operação onde o 'i' receba o operador atribuição 
de resto de divisão (módulo) calculando 'g' e 'h'.
*/
let g = 10;
let h = 4;
let i = g %= h;
console.log(i);

/*
10.Declare 3 variáveis, 'j', 'k' e 'l', atribua um número inteiro para 'j' e 
para 'k', em seguida elabore um operação onde o 'l' receba o operador atribuição 
de exponenciação calculando 'j' e 'k'.
*/
let j = 10;
let k = 5;
let l = j **= k;
console.log(l);