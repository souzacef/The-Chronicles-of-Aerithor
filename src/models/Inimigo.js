const Personagem = require("./Personagem");

class Inimigo extends Personagem {
    constructor(nome, vida, atqNormal, defesa) {
        super(nome, vida, atqNormal, defesa);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome} recebeu ataque e está em furia.`);        
    }

    exibirVida() {
        console.log(`\nVida de ${this.nome}: ${this.vida}\n`);        
    }
}

module.exports = Inimigo;
