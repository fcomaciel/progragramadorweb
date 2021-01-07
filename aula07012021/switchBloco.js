// Switch com código em bloco
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        day = "Dias de trabalho";
        break;
    default:
        day = "Dias de descanso";
}
console.log(day);
