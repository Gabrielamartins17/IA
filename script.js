
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao acordar, sua assistente de IA sugere a agenda mais eficiente para o seu dia. Como você reage?",
        alternativas: [
            {
                texto: "Aceita a sugestão da IA e segue a rotina otimizada.",
                afirmacao: "Começou a confiar nas recomendações da IA e sentiu-se mais produtivo diariamente."
            },
            {
                texto: "Ignora a sugestão e monta sua própria agenda.",
                afirmacao: "Preferiu manter autonomia na organização do dia, valorizando imprevistos e liberdade."
            }
        ]
    },
    {
        enunciado: "Durante o café da manhã, a IA recomenda notícias com base em suas preferências. O que você faz?",
        alternativas: [
            {
                texto: "Lê apenas as notícias recomendadas.",
                afirmacao: "Percebeu que suas leituras estão ficando cada vez mais previsíveis."
            },
            {
                texto: "Busca outras fontes por conta própria.",
                afirmacao: "Descobriu novos assuntos e diversificou sua visão sobre o mundo."
            }
        ]
    },
    {
        enunciado: "Na escola, seu professor propõe um projeto com auxílio de IA para desenvolver soluções criativas. Você decide:",
        alternativas: [
            {
                texto: "Criar o projeto junto com a IA, buscando ideias inovadoras.",
                afirmacao: "Conseguiu propor soluções que nem imaginava sozinho, graças ao apoio da IA."
            },
            {
                texto: "Fazer sem IA, confiando apenas na criatividade do grupo.",
                afirmacao: "Sentiu que o processo foi mais desafiador, mas valorizou a troca entre colegas."
            }
        ]
    },
    {
        enunciado: "Ao escrever uma redação, a IA oferece sugestões de temas e frases. Qual abordagem você escolhe?",
        alternativas: [
            {
                texto: "Usar as sugestões da IA como inspiração.",
                afirmacao: "A redação ganhou estrutura e ficou mais clara, sem perder seu toque pessoal."
            },
            {
                texto: "Ignorar a IA e escrever tudo sozinho.",
                afirmacao: "A redação ficou espontânea, refletindo exatamente seus pensamentos."
            }
        ]
    },
    {
        enunciado: "Chegando em casa, você quer preparar o jantar. A IA sugere uma receita com base nos ingredientes disponíveis. E agora?",
        alternativas: [
            {
                texto: "Segue a receita sugerida pela IA.",
                afirmacao: "Descobriu um prato delicioso e começou a experimentar mais com sugestões da IA."
            },
            {
                texto: "Decide cozinhar do seu próprio jeito.",
                afirmacao: "Criou uma receita original, explorando seu instinto culinário."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
