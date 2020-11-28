/*
Referências:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object
https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript-pt
*/

/*
Object.freeze()

O Object.freeze() Impede a modificação de propriedades e valores de um objeto e 
impede que as propriedades sejam adicionadas ou removidas de um objeto.
*/
// Congelando o objeto
// Inicializando um objeto
const anotherUser = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

const newUser = Object.freeze(anotherUser);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);

/*
Object.seal()

O Object.seal() impede que novas propriedades sejam adicionadas 
a um objeto, mas permite a modificação de propriedades existentes. 
Este método é semelhante ao Object.freeze(). Recarregue seu console 
antes de implementar o código abaixo para evitar um erro.
*/

// Sela o objeto
// Inicializando um objeto
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
