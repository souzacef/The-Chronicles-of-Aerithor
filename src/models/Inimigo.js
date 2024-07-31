const Personagem = require("./Personagem");

class Inimigo extends Personagem {
    constructor(nome, vida, atqNormal, defesa) {
        super(nome, vida, atqNormal, defesa);
    }

    // Sobrescreve o método receberDano para personalizar a mensagem
    receberDano(dano) {
        this.vida -= dano;
        console.log(`\n${this.nome} recebeu ataque e está em fúria.`);        
    }

    // Sobrescreve o método exibirVida para incluir uma linha em branco
    exibirVida() {
        console.log(`\nVida de ${this.nome}: ${this.vida}\n`);        
    }
}

// Exporta a classe Inimigo para uso em outras partes do jogo
module.exports = Inimigo;
