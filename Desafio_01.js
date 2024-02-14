/*
Desafios

    Faça o download de outro projeto clicando neste link e abra no Visual Studio Code.

    Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.

    Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.

    Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.

    Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

    Ao clicar no botão soma, peça 2 números e exiba o resultado da soma em um alerta.
*/

let titulo = document.querySelector('h1');
titulo.innerHTML = 'HORA DO DESAFIO';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Clique em algum dos botões';

function verificarChute() {
    console.log("O botão foi clicado!"); 
}

function verificarAlert() {
    alert("Eu amo JAVA! javascript eu só estou aprendendo para aprender JAVA!");
}

function verificarPrompt() {
    let cidade = prompt("Diga o nome de uma cidade do Brasil: ");
    alert("Estive em " + cidade + " e lembrei de você.");
}

function verificarSoma() {
    let n1 = parseInt(prompt("Digite o primeiro número: "));
    let n2 = parseInt(prompt("Digite o segundo número: "));
    let resultado = n1 + n2
    alert("A soma de " + n1 + " e " + n2 + " é igual a " + resultado); 
}