let numero1 = prompt("Digite o Primeiro Número: ");
let numero2 = prompt("Digite o Segundo Número: ");


let soma = Number(numero1) + Number(numero2);
let subtracao = Number(numero1) - Number(numero2);
let multiplicacao = Number(numero1) * Number(numero2)
let divisao = Number(numero1) / Number(numero2)
let resto = Number(numero1) % Number(numero2)

alert(soma)
alert(subtracao)
alert(multiplicacao)
alert(divisao)
alert(resto)

parOuImpar = soma / 2;

if (parOuImpar%2 == 0){
    alert("Numero Par")
} else {
    alert("Numero Impar")
}

if (numero1 == numero2){
    alert("Numeros Iguais")
} else {
    alert("Numeros Diferentes")
}