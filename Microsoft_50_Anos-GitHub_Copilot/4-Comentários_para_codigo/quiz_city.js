import { createInterface } from 'readline';

const quiz = [
    {
        question: "Qual é a capital da Romênia?",
        options: ["Bucareste", "Sófia", "Budapeste", "Atenas"],
        answer: 0
    },
    {
        question: "Qual é a capital da Coreia do Sul?",
        options: ["Seul", "Tóquio", "Pequim", "Bangcoc"],
        answer: 0
    },
    {
        question: "Qual é a capital da Nigéria?",
        options: ["Lagos", "Abuja", "Cairo", "Joanesburgo"],
        answer: 1
    },
    {
        question: "Qual é a capital da Albânia?",
        options: ["Tirana", "Sarajevo", "Belgrado", "Zagreb"],
        answer: 0
    },
    {
        question: "Qual é a capital do Haiti?",
        options: ["Porto Príncipe", "Kingston", "San Juan", "Havana"],
        answer: 0
    }
];

let score = 0;

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (i) => {
    rl.question(quiz[i].question + "\n" + quiz[i].options.join("\n"), (userAnswer) => {
        if (parseInt(userAnswer) === quiz[i].answer) {
            score++;
        }
        if (i === quiz.length - 1) {
            console.log("Você fez " + score + " pontos!");
            rl.close();
        } else {
            askQuestion(i + 1);
        }
    });
};

askQuestion(0);
