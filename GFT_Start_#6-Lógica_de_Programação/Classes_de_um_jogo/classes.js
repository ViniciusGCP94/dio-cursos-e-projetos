class personagem {
    constructor(nome, idade, tipo, ataque) {
        this.nome  = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = ataque; 
    }
    atacar() {
    console.log(`o ${this.tipo} atacou usando ${this.ataque}`);
    }
}

let mago = new personagem("Gandalf", 738, "Mago", "Magia");
let guerreiro = new personagem("Aragorn", 30, "Guerreira", "Espada"); 
let monge = new personagem("Maito Gai", 36, "Monge", "Artes Marciais"); 
let ninja = new personagem("Naruto", 25, "Ninja", "Shuriken");

mago.atacar()