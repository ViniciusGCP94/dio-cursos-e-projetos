// Escreva uma função que retorne um número inteiro se for par true se for impar false se não for inteiro retorne erro.

function isNumber(num) {
    if (typeof num !== 'number') {
        return 'Erro: Não é um número';
    }
    if (num % 1 !== 0) {
        return 'Erro: Não é um número inteiro';
    }
    return num % 2 === 0;
}