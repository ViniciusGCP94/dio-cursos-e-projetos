const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarPersonagem() {

let nome;
let xp;

    rl.question('Como é o nome do seu personagem ?', (respostaNome) => {
        nome = respostaNome;
        rl.question('Quanto de experiência ele tem ?', (respostaXp) => {
            xp = parseInt(respostaXp);

            let elo;
            
            if (respostaXp && respostaNome && !isNaN(xp)){

                if (xp <= 1000) {
                    elo = "Ferro";
                } else if (xp > 1000 && xp <= 2000 ) {
                    elo = "Bronze";
                } else if (xp > 2000 && xp <= 5000 ) {
                    elo = "Prata";
                } else if (xp > 5000 && xp <= 7000 ) {
                    elo = "Ouro";
                } else if (xp > 7000 && xp <= 8000 ) {
                    elo = "Platina";
                } else if (xp > 8000 && xp <= 9000 ) {
                    elo = "Diamante";
                } else if (xp > 9000 && xp <= 10000 ) {
                    elo = "Mestre";
                } else if (xp > 10000 ) {
                    elo = "Challenger";
                }
                
            console.log(`O Herói ${nome} está no elo ${elo}, pois tem ${xp} de xp`);
            } else {
            console.log('Por favor, insira valores válidos para o nome e a experiência.');
            }

            rl.question('Deseja inserir outro personagem? (s/n) ', (resposta) => {
            if (resposta.toLowerCase() === 's') {
            perguntarPersonagem(); // Chama a função novamente
            } else {
            console.log('Programa encerrado.');
            rl.close
            }
        
            })
        })
    })
}
perguntarPersonagem();