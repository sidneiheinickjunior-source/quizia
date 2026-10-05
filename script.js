const caixaPrincipal = document.querySelector(`.caixa-principal`);
const caixaPerguntas = document.querySelector(`.caixa-perguntas`);
const caixaAlternativas = document.querySelector(`.caixa-alternativas`);
const caixaResultado = document.querySelector(`.caixa-resultado`);
const textoResultado = document.querySelector(`.texto-resultado`);

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens eáudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            { texto: "Isso é assustador!", afirmacao: "afirmacao" },
            { texto: "Isso é maravilhoso!", afirmacao: "afirmacao" }
        ]
    },
    {
        enunciado:  "quantos anos voce tem?",
        alternativas: [
            { texto: "tenho 18 anos!", afirmacao: "afirmacao" },
            { texto: "tenho 20 anos!", afirmacao: "afirmacao" }
        ]
    }
];

let atual = 0;
let perguntaAtual;

perguntaAtual = perguntas[atual];

function mostraPergunta() {
    // Correção: Verifica se o jogo acabou antes de tentar ler a próxima pergunta
    if (atual >= perguntas.length) {
        caixaPerguntas.textContent = "Fim do questionário!";
        caixaAlternativas.textContent = "";
        textoResultado.textContent = "afirmacao";
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", function() {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();
