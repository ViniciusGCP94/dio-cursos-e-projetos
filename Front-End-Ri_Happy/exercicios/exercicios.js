 /*function incrementarJuros(valor, percentualDeJuros) { 
    const incremento = (percentualDeJuros / 100) * valor; 
    return valor + incremento; 
    }

     class Pessoa { 
        nome; idade; 
        constructor(nome, idade) { 
            this.nome = nome; this.idade = idade; 
            } 
            descrever() { 
                console.log(`Nome: ${this.nome}; Idade: ${this.idade};`); 
                } 
        } 
    new Pessoa('Renan', 30).descrever();

     class Pessoa { nome; idade; 
        constructor(nome, idade) { 
            this.nome = nome; this.idade = idade; 
        } 
    } 
    function descreverPessoa(pessoa) { 
        console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`); 
    } 
    const renan = new Pessoa('Renan', 30); 
    console.log(descreverPessoa(renan)); */

     const numerosPares = [];
      for (let i = 0; i < 10; i = i + 2) { 
        numerosPares.push(i); 
    } 
    console.log(numerosPares);