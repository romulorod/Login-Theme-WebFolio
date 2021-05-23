
let valor = 0;
function getRandom(min, max) {
    let rand = Math.floor(Math.random() * (max - min) + min);
    return rand;
}
let random = getRandom(0, 6);

let somar = function (valorUsuario, parOuImpar) {

    let soma = valorUsuario + random;
    const resultadoTexto = `Resultado: ${soma} <br>`;
    soma % 2 == 0 && parOuImpar == 'par' ? resultado.innerHTML = `${resultadoTexto} Parabéns, ${soma} é par e você acertou!` :
        soma % 2 !== 0 && parOuImpar == 'par' ? resultado.innerHTML = `${resultadoTexto} ${soma} É ímpar e você escolheu par, perdeu.` :
            soma % 2 == 0 && parOuImpar == 'impar' ? resultado.innerHTML = `${resultadoTexto} Uma pena, ${soma} é par e você escolheu impar, perdeu.` :
                soma % 2 !== 0 && parOuImpar == 'impar' ? resultado.innerHTML = `${resultadoTexto} ${soma} É ímpar e você acertou, parabéns!` : console.log('deu erro');
}

function menos() {
    document.getElementsByClassName('.numEscolhido'); // pega a classe
    const numEscolhidoMenos = document.querySelector('.numEscolhido'); // joga a classe numa variavel
    if (valor <= 0) { // testa
        alert('O número não pode ser menor que zero'); // alerta o erro
    } else if (valor >= 0) { // testa
        valor--; // executa a funcionalidade do botão
        numEscolhidoMenos.innerHTML = valor; // insere na página o decremento
    }
}
const botaoMenos = document.querySelector('.menos'); // joga a classe na variavel
botaoMenos.addEventListener('click', menos); // executa o click - ação virgula função

function mais() {
    document.getElementsByClassName('.numEscolhido');
    const numEscolhidoMais = document.querySelector('.numEscolhido');
    if (valor < 5) {
        valor++;
        numEscolhidoMais.innerHTML = valor;
    } else if (valor >= 5) {
        alert('O número não pode ser maior que cinco');
    }
}

const botaoMais = document.querySelector('.mais');
botaoMais.addEventListener('click', mais);


let escolheu = '';
let escolheuPar = document.querySelector('.par');
let escolheuImpar = document.querySelector('.impar');
let escolheuRand = document.querySelector('.aleatorio');


function verificaPar() {
    if (escolheu !== '') {
    } else {
        alert('Você precisa escolher entre Par, Ímpar ou Aleatório');
        return false;
    }
}

function impapa() {

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

let jogar = document.querySelector('.jogar');
jogar.addEventListener('click', function () {
    escolheuPar.style.backgroundColor = "#3c7e6f";
    escolheuImpar.style.backgroundColor = "#3c7e6f";
    escolheuRand.style.backgroundColor = "#3c7e6f";
});

function limpaValor() {
    escolheu = '';
}

impapa();
const usuario = document.querySelector('.usuario');
const maquina = document.querySelector('.maquina');
let botao = document.createElement('button');
botao.classList.add('botao');
let botao2 = document.createElement('button');
botao2.classList.add('botao');
usuario.classList.add('usuario');
usuario.style.fontSize = "large";
maquina.style.fontSize = "large";
const resultado = document.querySelector('.resultado');

function jogaNoHtml() {

    usuario.innerHTML = `Seu número foi: <br>${valor}<br> Sua escolha foi:<br>`
    if (escolheu == 'impar') {
        botao.innerHTML = 'Ímpar';
    }
    else if (escolheu == 'par') {
        botao.innerHTML = 'Par';
    } else;
    usuario.appendChild(botao);
    maquina.innerHTML = `O número da IA foi: <br>${random}<br> Ela escolheu:<br>`
    if (escolheu == 'par') {
        botao2.innerHTML = 'Ímpar';
    } else if (escolheu == 'impar') {
        botao2.innerHTML = 'Par';
    }
    maquina.appendChild(botao2);
}

jogar.addEventListener('click', function () {
    if (verificaPar()==false) return;
    somar(valor, escolheu);
    jogaNoHtml();
    limpaValor();
    random = getRandom(0, 6);
});
