class Personagem {
    constructor(nome, vida, atqNormal, defesa, atqEspecial) {
        this.nome = nome;
        this.vida = vida;
        this.atqNormal = atqNormal;
        this.defesa = defesa;
        this.atqEspecial = atqEspecial;
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
