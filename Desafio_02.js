/*
Desafios

    Criar uma função que exibe "Olá, mundo!" no console.

    Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

    Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.

    Criar uma função que recebe três números como parâmetros e retorna a média deles. X

    Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

    Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
*/

function olaMundo(){
    console.log("Olá, mundo!");
}
olaMundo();

let nome = prompt("Digite o seu nome: ");
function saudacao(nome){
    console.log(`Olá ${nome}!`);
} 
saudacao(nome);

// -------

let num = parseInt(Math.random() * 100 + 1);
function numeroAleatorio(num) {
     return num *= 2;
}
numeroAleatorio(num);
console.log(num);

// --------
console.log("CALCULO DE MÈDIA");

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
  }
  
let n1 = parseInt(prompt("Digite o primeiro número: "));
let n2 = parseInt(prompt("Digite o segundo número: "));
let n3 = parseInt(prompt("Digite o terceiro número: "));

let media = calcularMedia(n1, n2, n3);
console.log(media);

// --------

let num1 = prompt("Digite um número: ");
let num2 = prompt("Digite outro número: ");
function maiorMenor(x, y){
    if (x > y){
        console.log(x + " é maior que " + y);
    } else {
        if (x < y){
            console.log(y + " é maior que " + x);
        } else {
            console.log("Os número sãi iguais!")
        }
    }           
}
maiorMenor(num1, num2);
// --------
let numero = prompt("Digite um número: ");
function quadrado(x){
    return numero *= numero;
}
quadrado(numero);
console.log(numero);
