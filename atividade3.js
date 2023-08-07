const prompt = require ("prompt-sync")();

console.log("Desafio Copa do Mundo - Anos em que o Brasil foi campeão");
console.log("=======================================================");

const anosCampeao = [1958, 1962, 1970, 1994, 2002];
let tentativas = 0;
let acertos = 0;

while (acertos < 5) {
    const pergunta = `Em que o Brasil foi campeão da Copa do Mundo? (${acertos + 1}/5) `;
    const respostaUsuario = Number(prompt(pergunta));
    tentativas++;
    
    if (anosCampeao.includes(respostaUsuario)) {
        console.log("Parabéns! Resposta correta!");
        acertos++;
    } else {
        console.log("Resposta incorreta. Tente novamente!");
    }
}

console.log(`Parabéns! Você acertou todas as 5 perguntas em ${tentativas} tentativas.`);




