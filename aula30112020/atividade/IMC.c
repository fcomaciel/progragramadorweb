#include <stdio.h>
#include <math.h>

int main(void) {
    float massa, altura, _IMC;
    printf("Digite sua Massa (Kg): ");
    scanf("%f",&massa);
    printf("Digite sua Altura (Metros): ");
    scanf("%f",&altura);
    _IMC = (massa/altura * altura);
    printf("Seu IMC e: %0.2f\n",_IMC);

    if (_IMC<17) {
        printf("Muito abaixo do peso.\n");
    } else if (_IMC>17 && _IMC<18.49) {
        printf("Abaixo do peso.\n");
    } else if (_IMC>18.5 && _IMC<24.99) {
        printf("Peso normal.\n");
    } else if (_IMC>25 && _IMC<29.99) {
        printf("Acima do peso.\n");
    } else if (30 && _IMC<34.99) {
        printf("você esta Obeso.\n");
    } else if (_IMC>35 && _IMC<39.9) {
        printf("Obesidade Severa.\n");
    } else if (_IMC>40) {
        printf("você esta em Obesidade MORBIDA.\n");
    }

    return 0;
}