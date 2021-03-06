// Variáveis Simples - NAO ATUALIZA ESSA BOSTA

let valor = 0; // Valor escolhido pelo usuário pelos botões +/-
let escolheu = ''; // Valor da escolha entre par, impar e aleatório

// Variáveis DOM
    //Botão Menos
const botaoMenos = document.querySelector('.menos'); // Atribuir classe à variável
botaoMenos.addEventListener('click', menos); // executa o click - ação virgula função

    //Botão Mais
const botaoMais = document.querySelector('.mais'); // Atribuir classe à variável
botaoMais.addEventListener('click', mais);

    // Impar ou Par ?
let escolheuPar = document.querySelector('.par'); // Atribuir classe à variável
let escolheuImpar = document.querySelector('.impar'); // Atribuir classe à variável
let escolheuRand = document.querySelector('.aleatorio'); // Atribuir classe à variável

    //Botão Jogar
let jogar = document.querySelector('.jogar'); // Atribuir classe à variável
jogar.addEventListener('click', function () { // Ao clicar em jogar, seta todos os botões para cor padrão
    escolheuPar.style.backgroundColor = "#3c7e6f";
    escolheuImpar.style.backgroundColor = "#3c7e6f";
    escolheuRand.style.backgroundColor = "#3c7e6f";
});

    //Definir usuaro/máquina baseado na classe do HTML
const usuario = document.querySelector('.usuario'); // Atribuir classe à variável
const maquina = document.querySelector('.maquina'); // Atribuir classe à variável

    //Definir os botões do resultado
let botao = document.createElement('button'); // Criar elemento button
botao.classList.add('botao'); // Adicionar classe
let botao2 = document.createElement('button'); //Criar elemento button
botao2.classList.add('botao'); // Adicionar classe
usuario.classList.add('usuario'); // Adicionar classe
usuario.style.fontSize = "large"; //Estilização via JS
maquina.style.fontSize = "large"; //Estilização via JS
const resultado = document.querySelector('.resultado'); // Atribuir classe à variável
const emojiFeliz = document.createElement('p');
const emojiTriste = document.createElement('p2')

//Funções
    //Função que gera numero Randômico
function getRandom(min, max) {
    let rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}
let random = getRandom(0, 6);

    //Função Principal que faz o teste e insere o resultado no HTML
let somar = function (valorUsuario, parOuImpar) {

    let soma = valorUsuario + random;
    const resultadoTexto = `Result: ${soma} <br>`;
    soma % 2 == 0 && parOuImpar == 'par' ? resultado.innerHTML = `${resultadoTexto} Congratulations!, ${soma} is even and you got it! <br> ` +`${emojiFeliz.innerHTML = '&#128516'} <br>` :
        soma % 2 !== 0 && parOuImpar == 'par' ? resultado.innerHTML = `${resultadoTexto} ${soma} Is Odd and you chose Even, you lost.<br>`+`${emojiTriste.innerHTML = '&#128557'} <br>` :
            soma % 2 == 0 && parOuImpar == 'impar' ? resultado.innerHTML = `${resultadoTexto} What a pitty, ${soma} is even and you chose odd, you lost.<br>`+`${emojiTriste.innerHTML = '&#128557'}<br>` :
                soma % 2 !== 0 && parOuImpar == 'impar' ? resultado.innerHTML = `${resultadoTexto} ${soma} Is odd and you got it right! Congratulations!  <br> ` +`${emojiFeliz.innerHTML = '&#128516'} <br> ` : console.log('Something went wrong');
}
    //Função para o botão de menos
function menos() {
    document.getElementsByClassName('.numEscolhido'); // pega a classe
    const numEscolhidoMenos = document.querySelector('.numEscolhido'); // joga a classe numa variavel
    if (valor <= 0) { // testa
        alert('Number must be higher than 0'); // alerta o erro
    } else if (valor >= 0) { // testa
        valor--; // executa a funcionalidade do botão
        numEscolhidoMenos.innerHTML = valor; // insere na página o decremento
    }
}

    //Função para o botão de mais
function mais() {
    document.getElementsByClassName('.numEscolhido');
    const numEscolhidoMais = document.querySelector('.numEscolhido');
    if (valor < 5) {
        valor++;
        numEscolhidoMais.innerHTML = valor;
    } else if (valor >= 5) {
        alert('Number must be lower than 5');
    }
}
    //Função que verifica se alguma opção foi escolhida antes de iniciar
function verificaPar() {
    if (escolheu !== '') {
    } else {
        alert('You must choose between Even, Odd or Random');
        return false;
    }
}
    //Função que define o botão clica, muda cor de fundo e modifica o valor da variável entre par ou impar
function impaPar() {

    escolheuPar.addEventListener('click', function () {
        escolheu = 'par';
        escolheuPar.style.backgroundColor = "#ff6347";
        escolheuImpar.style.backgroundColor = "#3c7e6f";
        escolheuRand.style.backgroundColor = "#3c7e6f";
    });
    escolheuImpar.addEventListener('click', function () {
        escolheu = 'impar';
        escolheuPar.style.backgroundColor = "#3c7e6f";
        escolheuImpar.style.backgroundColor = "#ff6347";
        escolheuRand.style.backgroundColor = "#3c7e6f";
    });
    escolheuRand.addEventListener('click', function () {
        escolheuPar.style.backgroundColor = "#3c7e6f";
        escolheuImpar.style.backgroundColor = "#3c7e6f";
        escolheuRand.style.backgroundColor = "#ff6347";
        x = getRandom(0, 6);
        if (x >= 0 && x <= 2) { escolheu = 'par' }
        else if (x >= 3 && x <= 5) { escolheu = 'impar' };
    })
}
    //Função que zera o valor, para que o usuário precise escolher novamente entre par ou impar
function limpaValor() {
    escolheu = '';
}

impaPar();
function setLink(){
    const link = document.getElementById('botaoCV')
    link.style.display = "flex";
}

    //Função que insere no HTML através do JS as informações do resultado do jogo.
function jogaNoHtml() {

    usuario.innerHTML = `Your chosen number was:<br>${valor}<br> Your choice was:<br>`
    if (escolheu == 'impar') {
        botao.innerHTML = 'Odd';
    }
    else if (escolheu == 'par') {
        botao.innerHTML = 'Even';
    } else;
    usuario.appendChild(botao);
    maquina.innerHTML = `Your oppnent number was: <br>${random}<br> It chose:<br>`
    if (escolheu == 'par') {
        botao2.innerHTML = 'Odd';
    } else if (escolheu == 'impar') {
        botao2.innerHTML = 'Even';
    }
    maquina.appendChild(botao2);
}
    //Função geral que recebe o click no botão Jogar e executa as funções cadeadamente para que tudo performe dentro do esperado.
jogar.addEventListener('click', function () {
    if (verificaPar()==false) return;
    setLink();
    somar(valor, escolheu);
    jogaNoHtml();
    limpaValor();
    random = getRandom(0, 6);
});
