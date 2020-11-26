// Conceitos básicos sobre Arrays
// Indice       0         1        2
let frutas = ['Maçã', 'Banana', 'Pera'];
///console.log(frutas.length);

// console.log(typeof(frutas));
// Métodos
// push -> acrescenta um elemento ao final do array
frutas.push('Limão');
///console.log(frutas.length);
///console.log(frutas);

// unshift -> acrescenta um elemento ao início do array
frutas.unshift('Goiaba');
///console.log(frutas.length);
console.log(frutas.sort().join(' '));

// Iteração do Array
/// frutas.forEach(item => console.log(item));
frutas.forEach((item, index) => {
    console.log(index, item);
});

/*
// pop -> deleta o último elemento array
frutas.pop();
console.log(frutas.length);
console.log(frutas);

// pop -> deleta o último elemento array
frutas.shift();
console.log(frutas.length);
console.log(frutas);

frutas.
*/
