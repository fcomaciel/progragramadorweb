// Regras de Bloqueio de Escopo
// Com var

var x = 1;
{
    var x = 2;
}
console.log(x); // 2

// Com o let
let x = 1;
{
    let x = 2;
}
console.log(x); // 1

// Com const
const x = 1;
{
    const x = 2;
}
console.log(x); // 1
