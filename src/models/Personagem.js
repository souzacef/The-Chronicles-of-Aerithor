class Personagem {
    constructor(nome, vida, atqNormal, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.atqNormal = atqNormal;
        this.defesa = defesa;        
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`${this.nome}: OUCH! Essa doeu.`);
    }

    exibirVida() {
        console.log(`${this.nome}: Vida: ${this.vida}`);
    }
}

module.exports = Personagem;
