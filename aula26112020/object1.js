/*
Referências:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript-pt
*/
// Conceitos básicos sobre objetos
// Chaves são utilizadas para criar Arrays []
// const array = [1,2,3];

// Colchetes são utilizadas para criar objetos {}
// const objeto {1,2,3};
// CRIANDO OBJETOS

const person = {
    firstNome: 'Maria',
    lastName: 'Silva',
    age: 25,
    // fullName: function () {
    //     return this.firstNome + " " + this.lastName;
    // }
};

// Object.keys()
// Iterando o objeto, chaves e valores
Object.keys(person).forEach(key => {
    let value = person[key];

     console.log(`${key}: ${value}`);
});

// Obtendo o comprimento do objeto
const length = Object.keys(person).length;
console.log(length);

// Object.values()
// Obtendo os valores do objeto
const values = Object.values(person);
console.log(values);

// Object.entries()
// Obtendo chaves e valores do objeto
const entries = Object.entries(person);
console.log(entries);

// Criando loop com os dados
entries.forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}: ${value}`);
});

// Object.assign()
// O Object.assign() é usado para copiar valores de um objeto para outro.
// Podemos criar dois objetos e fundi-los com o Object.assign().

// Inicializando outro objeto
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express',
    avaiable: true
};

// Mesclando os objetos
const character = Object.assign(person, details);
console.log(character);
