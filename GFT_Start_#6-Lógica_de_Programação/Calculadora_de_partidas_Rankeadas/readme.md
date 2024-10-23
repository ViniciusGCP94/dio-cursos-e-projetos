# Calculadora de Partidas Rankeadas

## Descrição

A **Calculadora de Partidas Rankeadas** é uma aplicação que calcula o saldo de vitórias e derrotas de um jogador em partidas ranqueadas e determina o elo correspondente. O projeto é desenvolvido em Node.js e utiliza o módulo `readline` para interagir com o usuário no console.

## Funcionalidades

- Solicita ao usuário a quantidade de vitórias e derrotas.
- Calcula o saldo de partidas (vitórias - derrotas).
- Determina o elo do jogador com base no saldo.
- Exibe o resultado ao usuário.

## Tecnologias Utilizadas

- [Node.js](https://nodejs.org/) - Ambiente de execução para JavaScript.
- Módulo `readline` - Para leitura de entrada do usuário via console.

## Estrutura do Projeto

```plaintext
Calculadora_de_partidas_Rankeadas/
│
├── calculate/
│   └── calculatingMatchs.js    # Função para calcular o saldo de partidas
│
├── elos/
│   └── yourElo.js               # Função para determinar o elo
│
└── ranked.js                    # Arquivo principal que executa a aplicação
```

## Como usar:

1. Clonar ou repositório:<br>
```bash
git clone https://github.com/seuusuario/Calculadora_de_partidas_Rankeadas.git
```

2. Navegue até o diretório do projeto:<br>
```bash
cd Calculadora_de_partidas_Rankeadas
```

3. Executar uma aplicação:<br>
```bash
node ranked.js
```

4. Siga as instruções no console para inserir o número de vitórias e derrotas.

## Exemplos de uso
```bash
Quantas partidas você venceu? 15 
Quantas partidas você perdeu? 5
O Herói tem um Match Making Result de 10 e está no elo de Bronze.
```

## Contribuição
Contribuições são bem-vindas! Para contribuir você deve seguir os passos abaixo:

 1. Faça um fork do repositório.
 2. Crie uma nova branch ( git checkout -b feature/nome-da-feature).
 3. Faça suas alterações e confirme ( git commit -m 'Adiciona nova feature').
 4. Faça o push do seu branch ( git push origin feature/nome-da-feature).
 5. Abra um pull request.

## Licença
Este projeto está licenciado sob uma [Licença do MIT](https://opensource.org/licenses/MIT) .
