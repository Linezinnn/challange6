let numberOne = Number(prompt("Digite o primeiro número"))
let numberTwo = Number(prompt("Digite o segundo número"))

const sum = numberOne + numberTwo
alert("A soma dos dois números é: " + sum)

const subtract = numberOne - numberTwo
alert("A subtração dos dois números é: " + subtract)

const multiply = numberOne * numberTwo
alert("A multiplicação dos dois números é: " + multiply)

const divise = numberOne / numberTwo
alert("A divisão dos dois números é: " + divise)

const rest = numberOne % numberTwo
alert("O resto da divisão dos dois números é: " + rest)

if((sum % 2) === 0){
    alert("A soma dos dois números é par: " + sum)
}else{
    alert("A soma dos dois números é impar: " + sum)
}

if(numberOne === numberTwo){
    alert("Os números inseridos são iguais.")
}else{
    alert("Os números inseridos são diferentes.")
}