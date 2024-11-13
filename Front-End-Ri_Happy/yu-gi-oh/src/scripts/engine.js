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
    player1: "player-field-card",
    computer: "computer-field-card"
};

const pathImages = ".src/assets/icons/"

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
        imagePath: `${baseImagePath}/magician.png`,
        winsAgainst: [0], // Ganha do Blue-Eyes White Dragon
        losesTo: [2] // Perde para Exodia
    },

    {
        id: 2,
        name: 'Exodia',
        type: 'scissors',
        imagePath: `${baseImagePath}/exodia.png`,
        winsAgainst: [1], // Ganha do Dark Magician
        losesTo: [0] // Perde para Blue-Eyes White Dragon
    }
]

async function drawCards (cardNumbers,fieldSide) {
    for (let i = 0; i < cardNumbers; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await getCreateCardImage(randomIdCard, fieldSide);

        document.getElementById(fieldSide).appendChild(cardImage)
    }
}

function init( ) {
    drawCards(5, playerSides.player1)
    drawCards(5, playerSides.computer)
}

init();