const Personagem = require("./Personagem");

class Heroi extends Personagem {
    gil = 30; // gil = moedas do jogo

    constructor(nome, nivel, vida, forca, defesa, atqEspecial) {
        super(vida, forca, defesa, atqEspecial);
        this.nome = nome;
        this.nivel = nivel;
    }

    exibirStatus() {
        console.log();
        console.log(`Nível: ${this.nivel} Vida: ${this.vida} Força: ${this.forca} Defesa: ${this.defesa}`);
        console.log();
    }

    exibirVida() {
        console.log();
        console.log(`Vida: ${this.vida}`);
        console.log();
    }

    curar() {
        this.vida += 50;
        console.log("\nVida restaurada em 50 pontos\n");
    }

    aumentarForca() {
        this.forca += 10;
        console.log();
        console.log(`Força aumentou em 10 pontos. Força atual: ${this.forca}`);
        console.log();
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log("\nVocê foi atacado. OUCH!");
        this.exibirVida();
        console.log();
    }

    levelUp() {
        console.log("\nParabéns, você subiu de nível!");
        this.nivel++;
        this.vida += 20;
        this.forca += 8;
        this.defesa += 3;
        this.exibirStatus();
        console.log();
    }

    gastarGil(valor) {
        this.gil -= valor;
        console.log();
        console.log(`Você gastou G$ ${valor}. Você ainda possui G$ ${this.gil}`);
        console.log();
    }

    guardarGil(valor) {
        this.gil += valor;
        console.log();
        console.log(`Você recebeu G$ ${valor}. Você possui G$ ${this.gil}`);
        console.log("Tô rico!\n");
    }
}

module.exports = Heroi;
