const Personagem = require("./Personagem");

class Inimigo extends Personagem {
    constructor(nome, vida, atqNormal, defesa, atqEspecial) {
        super(nome, vida, atqNormal, defesa, atqEspecial);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} foi atacado e está furioso.`);
        this.exibirVida();
    }

    exibirVida() {
        console.log();
        console.log(`Vida do ${this.nome}: ${this.vida}`);
        console.log();
    }
}

module.exports = Inimigo;
