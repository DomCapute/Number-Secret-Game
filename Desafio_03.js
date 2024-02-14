/*
Desafios

    Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

    Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

    Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

    Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

    Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

    Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
*/
//------------------------
function imc(altura, peso){
    return imc = peso / (altura*altura);
}
imc(1.80, 88.5);
console.log(imc);

// ------------------------

function factorial(n){
    if (n == 0 || n == 1){
        return 1;
    } 
    let factorial = 1
    for (let i = 2; i <= n; i++){
        factorial *= i;
    }        
    return factorial;
}
let num = 5;
let result = factorial(num);
console.log(`O factorial de ${num} é ${result}`);

// -------------------------

function conversorRD (valor){
    let convercao = valor * 4.92;
    return convercao.toFixed(2);
}
let D = 50;
let r = conversorRD(D);
console.log(`R$${D} convertido para dólar = $${r}`);

// -------------------------

function areaP(largura, altura) {
    let area = altura * largura;
    let per = 2 * (altura + largura);

    console.log(`Area: ${area}`);
    console.log(`Perímetro: ${per}`);
}
let altura = 3;
let largura = 5;
areaP(altura, largura);

// --------------------------

function perAreaCir(raio) {
    let area = Math.PI * raio * raio;
    let per = 2 * Math.PI * raio;

    console.log("Área: " + area);
    console.log("Perímetro: " + per);
}
raio = 5
perAreaCir(raio);

// ---------------------------

function tabuada(n){
    for (let i = 1; i <= 10; i ++){
        let resultado = n*i;
        console.log(`${n} X ${i} == ${resultado}`);
    }
}
let n = prompt("Digite um número: ");
tabuada(n);

 
