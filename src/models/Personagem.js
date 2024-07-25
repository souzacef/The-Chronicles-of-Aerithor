class Personagem {
    constructor(nome, vida, forca, defesa, atqEspecial) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
        this.atqEspecial = atqEspecial;
    }

    receberDano() {
        console.log("OUCH! Essa doeu.");
    }
}

module.exports = Personagem;
