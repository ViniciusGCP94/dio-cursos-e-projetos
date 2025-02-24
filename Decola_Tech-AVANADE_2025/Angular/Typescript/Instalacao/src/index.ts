type heroi = {
    name: string;
    vulgo: string;
};

function printaObjeto (pessoa:heroi){
    console.log(pessoa)
}

printaObjeto({
    name: "Vinicius",
    vulgo: "Vinnie"
});

console.log("Olá mundo!")