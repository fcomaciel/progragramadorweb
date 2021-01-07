/*
Switch - Sintaxe

switch(expressão) {
    case x:
        // código
        break;

    case y:
        // código
        break;

    default:
        // código
}
*/
switch (new Date().getDay()) {
    case 0:
        day = "Domingo";
        break;
    case 1:
        day = "Segunda-feira";
        break;
    case 2:
        day = "Terça-feira";
        break;
    case 3:
        day = "Quarta-feira";
        break;
    case 4:
        day = "Quinta-feira";
        break;
    case 5:
        day = "Sexta-feira";
        break;
    case 6:
        day = "Sábado";
}
console.log(day);
