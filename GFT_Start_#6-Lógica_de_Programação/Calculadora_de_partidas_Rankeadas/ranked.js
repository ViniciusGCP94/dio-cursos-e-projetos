const readline = require('readline');
const matchMaking = require('./calculate/calculatingMatchs');
const determineElo =  require('./elos/yourElo')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Quantas partidas você venceu? ', (respostaVitorias) => {
    const win = parseInt(respostaVitorias);
    rl.question('Quantas partidas você perdeu? ', (respostaDerrotas) => {
        const lose = parseInt(respostaDerrotas);

        // Calcular saldo e determinar o nível
        const mmr = matchMaking(win, lose);
        const rank = determineElo(mmr);

        // Exibir o resultado
        console.log(`O Herói tem um Match Making Result de ${mmr} e está no elo de ${rank}.`);

        rl.close();
    });
});
