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
    fullName: function () {
        return this.firstNome + " " + this.lastName;
    }
};

const keys = Object.keys(person);

console.log(keys);
console.log(person.fullName());
console.log(person.firstNome);
console.log(person.lastName);
console.log(person.age);
