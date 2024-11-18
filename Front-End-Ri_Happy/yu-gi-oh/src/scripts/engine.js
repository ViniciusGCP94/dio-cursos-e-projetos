const state = {
    score:{
        playerScore:0,
        computerScore:0,
        scoreBox: document.getElementById("score-points")
    },

    cardSprites:{
        avatar: document.getElementById("card-image"),
        name: document.getElementById("card-name"),
        type: document.getElementById("card-type")
    },

    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },

    playerSides: {
    player1: "player-cards",
    player1Box: document.querySelector("#player-cards"),
    computer: "computer-cards",
    computerBox: document.querySelector("#computer-cards")
    },

    actions:{
        resetButton:document.getElementById("next-duel")
    },
}

const pathImages = "./src/assets/icons/"

const cardData = [
    {
        id:0,
        name:"Blue Eyes White Dragon",
        type:"paper",
        image: `${pathImages}dragon.png`,
        WinOf: [2], // Ganha do Exodia
        LoseOf: [1] // Perde para Dark Magician
    },

    {
        id: 1,
        name: 'Dark Magician',
        type: 'rock',
        image: `${pathImages}magician.png`,
        WinOf: [0], // Ganha do Blue-Eyes White Dragon
        LoseOf: [2] // Perde para Exodia
    },

    {
        id: 2,
        name: 'Exodia',
        type: 'scissors',
        image: `${pathImages}exodia.png`,
        WinOf: [1], // Ganha do Dark Magician
        LoseOf: [0] // Perde para Blue-Eyes White Dragon
    }
];

async function getCreateCardImage(idCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if (fieldSide === state.playerSides.player1){

        cardImage.addEventListener("mouseover", () => {
            drawSelectCard(idCard)
        })
        
        cardImage.addEventListener("click", () => {
            setCardsField(cardImage.getAttribute("data-id"))
        })
    }

    return cardImage;
}

async function getRandomCardId(){
    const randomIndex = Math.floor(Math.random() * cardData.length);
    return cardData[randomIndex].id;
}

async function setCardsField(idCard){
    await removeAllCardsImage();

    computerIdCard = await getRandomCardId();

    state.fieldCards.player.style.display = "block";
    state.fieldCards.computer.style.display = "block";

    state.fieldCards.player.src = cardData[idCard].image;
    state.fieldCards.computer.src = cardData[computerIdCard].image;

    let duelResults = await checkDuelResults(idCard, computerIdCard);


    await updateScore();
    await drawButton(duelResults);

}

async function drawButton(text){
    state.actions.resetButton.innerText = text.toUpperCase();
    state.actions.resetButton.style.display = "block"
}

async function updateScore(){
    state.score.scoreBox.innerText = `Win: ${state.score.playerScore} | Lose: ${state.score.computerScore}`
}

async function checkDuelResults(playerIdCard, computerIdCard){
    let duelResults = "draw";
    let playerCard = cardData[playerIdCard];

    if (playerCard.WinOf.includes(computerIdCard)){
        duelResults = "win";
        await playAudio(duelResults)
        state.score.playerScore++;
    }

    if (playerCard.LoseOf.includes(computerIdCard)){
        duelResults = "lose";
        await playAudio(duelResults)
        state.score.computerScore++;
    }

    return duelResults;
}

async function removeAllCardsImage(){
    let cards = state.playerSides.computerBox;
    let imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());

    cards = state.playerSides.player1Box;
    imgElements = cards.querySelectorAll("img");
    imgElements.forEach((img) => img.remove());
}

async function drawSelectCard(index) {
    state.cardSprites.avatar.src = cardData[index].image;
    state.cardSprites.name.innerText = cardData[index].name;
    state.cardSprites.type.innerText = `Attribute : ${cardData[index].type}`;
}

async function drawCards (cardNumbers,fieldSide) {
    for (let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await getCreateCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage);
    }
}

async function resetDuel(){
    state.cardSprites.avatar.src = "";
    state.actions.resetButton.style.display ="none";

    state.fieldCards.player.style.display = "none";
    state.fieldCards.computer.style.display = "none";

    init();
}

async function playAudio(status){
    const audio = new Audio(`./src/assets/audios/${status}.wav`);
    audio.play();
}

function init( ) {
    drawCards(5, state.playerSides.player1)
    drawCards(5, state.playerSides.computer)

    const bgm = document.getElementById("bgm");
    bgm.play();
}

init()