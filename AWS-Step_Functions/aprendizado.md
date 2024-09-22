# Aprendizados sobre AWS Step Functions

## Compreensão dos Step Functions: 
Aprendi que o AWS Step Functions permite orquestrar microserviços e criar fluxos de trabalho de forma visual. Isso facilita a automação de processos complexos, ajudando a integrar diferentes serviços da AWS.

## Níveis de Permissão: 
Entendi que, para usar modelos do Amazon Bedrock dentro dos Step Functions, é crucial configurar as permissões corretamente. Não basta apenas ter permissão no Step Functions; é necessário também verificar as configurações de cada serviço específico.

## Configuração do Amazon Bedrock:
Descobri que o Amazon Bedrock oferece diferentes modelos de IA e que é importante solicitar acesso a esses modelos, dependendo da região. Aprendi a escolher o modelo certo conforme a permissão da minha conta na AWS.

## Criação de um Assistente de Delivery:
Durante as aulas, desenvolvi um assistente de delivery que sugere combinações de pratos e bebidas para criar uma experiência gastronômica. Isso me ensinou a aplicar as configurações de entrada e saída de forma prática.

## Trabalho com JSON: 
Aprendi a trabalhar com JSON dentro dos Step Functions, passando dados entre diferentes estados e utilizando variáveis para armazenar resultados. Isso é fundamental para manipular informações e gerar respostas dinâmicas.

# Configurações que eu usaria na AWS:

- Permissões de Usuário: Sempre configuraria permissões de usuário específicas para garantir que os serviços corretos tenham acesso aos recursos necessários. Isso previne erros de acesso e garante que a aplicação funcione sem interrupções.

- Modelos do Amazon Bedrock: Selecionaria os modelos disponíveis no Amazon Bedrock com base na minha necessidade e permissão. Isso me permite aproveitar ao máximo os serviços de IA oferecidos pela AWS.

- Ajustes em Tokens: Ao definir a quantidade de tokens nos meus prompts, aumentaria esse número para melhorar a resposta dos modelos, garantindo que as saídas sejam ricas e informativas.
<br><br><br>
# Exemplo de Configuração para Exercícios para Diabéticos na AWS

## 1. Permissões de Usuário:
### Descrição: 
Configuraria um perfil de execução com permissões específicas para acessar dados relacionados a saúde e exercícios.
### Configuração: 
- Criaria um IAM Role chamado DiabetesExerciseRole.
- Anexaria políticas que permitem acesso ao Amazon S3 (para armazenar e recuperar planos de exercícios) e ao Amazon API Gateway (para integrar APIs de dados de saúde).
- Isso garantiria que apenas serviços autorizados pudessem acessar e manipular esses dados.

## 2. Modelos do Amazon Bedrock:
### Descrição: 
Escolheria um modelo de IA do Amazon Bedrock para gerar recomendações de exercícios adaptadas a diabéticos.
### Configuração:
- Solicitaria acesso ao modelo de "Recomendação de Atividades Físicas".
- Verificaria a documentação do modelo para entender os tipos de entradas e saídas que ele aceita, ajustando as perguntas feitas para otimizar as respostas.
- Com isso, poderia obter recomendações personalizadas de exercícios baseadas nas condições de saúde dos usuários.

## 3. Ajustes em Tokens:
### Descrição: 
Definiria a quantidade de tokens para melhorar a qualidade das recomendações geradas pelo modelo.
### Configuração:
- Em cada prompt enviado ao modelo, configuraria o número máximo de tokens para 1500, permitindo respostas mais detalhadas.
- Exemplo de prompt: "Quais são os melhores exercícios de baixo impacto para diabéticos que podem ser feitos em casa? Liste cinco opções com descrições curtas."

## 4. Implementação de Step Functions:
### Descrição: 
Criaria uma máquina de estados usando AWS Step Functions para orquestrar o fluxo de dados entre diferentes serviços.
### Configuração:
- Um estado inicial que coleta dados do usuário (como nível de atividade e restrições médicas).
- Um estado que invoca o modelo do Amazon Bedrock para gerar recomendações de exercícios.
- Um estado que armazena as recomendações geradas em um bucket do S3, para que possam ser acessadas facilmente.

## 5. Exemplo de Fluxo de Trabalho:
- Estado 1: Receber dados do usuário (por exemplo, tipo de diabetes, preferências de exercício).
- Estado 2: Invocar o modelo de IA do Amazon Bedrock para obter recomendações.
- Estado 3: Armazenar as recomendações em um bucket do S3 chamado diabetes-exercise-plans.
- Estado 4: Notificar o usuário por e-mail sobre as recomendações disponíveis.
<br><br>
> "Essas configurações garantiriam que o sistema seja seguro, eficiente e adaptado às necessidades  específicas de usuários diabéticos, proporcionando recomendações de exercícios personalizadas e de  fácil acesso. "