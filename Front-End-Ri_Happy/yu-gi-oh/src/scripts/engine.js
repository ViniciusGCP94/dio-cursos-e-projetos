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

    actions:{
        resetButton:document.getElementById("next-duel")
    },
}

const playerSides = {
    player1: "player-cards",
    computer: "computer-cards"
};

const pathImages = "./src/assets/icons/"

const cardData = [
    {
        id:0,
        name:"Blue Eyes White Dragon",
        type:"paper",
        image: `${pathImages}dragon.png`,
        winsAgainst: [2], // Ganha do Exodia
        losesTo: [1] // Perde para Dark Magician
    },

    {
        id: 1,
        name: 'Dark Magician',
        type: 'rock',
        image: `${pathImages}magician.png`,
        winsAgainst: [0], // Ganha do Blue-Eyes White Dragon
        losesTo: [2] // Perde para Exodia
    },

    {
        id: 2,
        name: 'Exodia',
        type: 'scissors',
        image: `${pathImages}exodia.png`,
        winsAgainst: [1], // Ganha do Dark Magician
        losesTo: [0] // Perde para Blue-Eyes White Dragon
    }
];

async function getCreateCardImage(idCard, fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", idCard);
    cardImage.classList.add("card");

    if (fieldSide === playerSides.player1){

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

    state.fieldCards.player.src = cardData[idCard].img;
    state.fieldCards.computer.src = cardData[computerIdCard].img;

    let duelResults = checkDuelResults(idCard, computerIdCard);


    await upadateScore();
    await drawButton(duelResults)

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

function init( ) {
    drawCards(5, playerSides.player1)
    drawCards(5, playerSides.computer)
}

init();