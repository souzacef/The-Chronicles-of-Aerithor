class Personagem {
    constructor(nome, vida, atqNormal, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.atqNormal = atqNormal;
        this.defesa = defesa;        
    }

    // Método para receber dano e atualizar a vida do personagem
    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome}: OUCH! Essa doeu.`);
    }

    // Exibe a quantidade de vida restante
    exibirVida() {
        console.log(`${this.nome}: Vida: ${this.vida}`);
    }
}

// Exporta a classe Personagem para ser usada como base para outras classes
module.exports = Personagem;
