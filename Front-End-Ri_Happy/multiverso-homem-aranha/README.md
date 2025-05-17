# Spider-Man Multiversos

Projeto de landing page interativa inspirado no multiverso do Homem-Aranha, desenvolvida com HTML, CSS e JavaScript puro. O usuário pode navegar visualmente entre diferentes versões do personagem em um carrossel 3D estilizado.

## Demonstração

> **Sugestão:** Faça o deploy do projeto no GitHub Pages, Vercel, Netlify ou similar e insira o link aqui!

## Funcionalidades

- Carrossel 3D com cards dos personagens (Tobey Maguire, Tom Holland, Andrew Garfield)
- Animações de hover e destaque visual ao passar o mouse sobre os cards
- Navegação pelo menu para selecionar rapidamente cada personagem
- Interface responsiva para dispositivos móveis e desktop
- Troca dinâmica de plano de fundo conforme interação

## Tecnologias Utilizadas

- **HTML5**: Estrutura da página e semântica
- **CSS3**: Estilização avançada, responsividade, animações e filtros
- **JavaScript Vanilla**: Lógica de interação do carrossel, hover, navegação e manipulação do DOM

## Estrutura de Arquivos

- `index.html`: Página principal
- `assets/css/home-page-styles.css`: Estilos principais do projeto
- `assets/scripts/index.js`: Lógica de interação do carrossel e menu
- `assets/scripts/script.js`: (não acessível no momento)
- `assets/images/`: Imagens utilizadas nos cards e background
- `pages/`: Subpáginas dos personagens

## Principais Trechos do Código

### JavaScript (`index.js`)
- Adiciona/remover classe de hover nos cards
- Troca o plano de fundo conforme o card focado
- Permite clicar no menu para navegar diretamente entre os personagens
- Atualiza o carrossel dinamicamente com rotação 3D

### CSS (`home-page-styles.css`)
- Carrossel em 3D com `transform: rotateY`
- Cards com bordas, imagens sobrepostas e título animado
- Animações de hover nos cards e troca de fundo do body
- Responsividade detalhada para diversas resoluções

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/ViniciusGCP94/dio-cursos-e-projetos.git