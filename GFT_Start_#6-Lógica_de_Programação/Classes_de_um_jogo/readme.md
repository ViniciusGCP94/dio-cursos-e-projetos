# Classes de um Jogo

Este projeto foi desenvolvido como parte de um desafio do curso GFT Start #6 - Lógica de Programação, oferecido pela DIO (Digital Innovation One). O objetivo é criar uma estrutura de classes que represente personagens de um jogo de aventura, utilizando conceitos de programação orientada a objetos (POO) em JavaScript.

## Descrição do Projeto

O projeto consiste em implementar uma classe genérica chamada `Hero`, que representa heróis de um jogo. A classe deve ter as seguintes propriedades:

- **Nome**: Nome do personagem.
- **Idade**: Idade do personagem.
- **Tipo**: Tipo do herói, que pode ser um dos seguintes: Guerreiro, Mago, Monge ou Ninja.

Além disso, a classe `Hero` inclui um método chamado `atacar` que exibe uma mensagem personalizada dependendo do tipo de personagem. O método deve mostrar a ação correspondente ao tipo de herói:

- **Guerreiro**: "usou espada".
- **Mago**: "usou magia".
- **Monge**: "usou artes marciais".
- **Ninja**: "usou shuriken".

## Funcionalidades

- Criação de objetos baseados na classe `Hero`.
- Instanciação de heróis com diferentes tipos e características.
- Execução do método `atacar`, que exibe uma mensagem dinâmica de acordo com o tipo de herói.

## Tecnologias Utilizadas

- **JavaScript**: A linguagem principal utilizada para desenvolver o projeto.
- **Node.js**: Para executar o código no ambiente de desenvolvimento.

## Pré-requisitos

Antes de executar o projeto, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

## Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/classes-de-um-jogo.git
   ```
2. Navegue até o diretório do projeto:
    ```bash
    cd classes-de-um-jogo
    ```
3. Execute o arquivo <code>classes.js</code> com o Node.js:
    ```bash
    node classes.js
    ```

## Estrutura do Código

A estrutura do código segue o padrão de uma classe básica em JavaScript. Abaixo está um exemplo do código para criar a classe <code>Hero</code> e usar o método <code>atacar</code>:

<code>
```javascript
class Hero {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case "Guerreiro":
                ataque = "usou espada";
                break;
            case "Mago":
                ataque = "usou magia";
                break;
            case "Monge":
                ataque = "usou artes marciais";
                break;
            case "Ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "usou um ataque desconhecido";
        }
        console.log(`${this.tipo} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const mago = new Hero("Gandalf", 738, "Mago");
mago.atacar(); // Saída: Mago atacou usando magia

const guerreiro = new Hero("Aragorn", 87, "Guerreiro");
guerreiro.atacar(); // Saída: Guerreiro atacou usando espada
</code>
