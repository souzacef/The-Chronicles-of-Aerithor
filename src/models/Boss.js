const Personagem = require("./Personagem");

class Boss extends Personagem {
    constructor(vida, forca, defesa, atqEspecial) {
        super(nome, vida, forca, defesa, atqEspecial);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} foi atacado e está furioso. `);
        this.exibirVida();
        console.log();
    }

    exibirVida() {
        console.log();
        console.log(`Vida do ${this.nome}: ${this.vida} `);
        console.log();
    }
}

module.exports = Boss;
