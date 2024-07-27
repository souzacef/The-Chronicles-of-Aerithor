const Personagem = require("./Personagem");

class Heroi extends Personagem {
    constructor(nome, nivel, vida, atqNormal, defesa, atqEspecial) {
        super(nome, vida, atqNormal, defesa, atqEspecial);
        this.nivel = nivel;
        this.gil = 30;
    }

    exibirStatus() {
        console.log(`\nNível: ${this.nivel}\nVida: ${this.vida}\nAtaque: ${this.atqNormal}\nDefesa: ${this.defesa}\nEspecial: ${this.atqEspecial}\n`);
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
        this.atqNormal += 10;
        console.log(`\nForça aumentou em 10 pontos. Força atual: ${this.atqNormal}\n`);
    }

    receberDano(dano) {
        this.vida -= dano;
        console.log(`\nVocê foi atacado. OUCH!\n`);
        this.exibirVida();
    }

    levelUp() {
        console.log(`\nParabéns, você subiu de nível!`);
        this.nivel++;
        this.vida += 10;
        this.atqNormal += 5;
        this.defesa += 3;
        this.atqEspecial += 5;
        this.exibirStatus();
    }

    gastarGil(valor) {
        this.gil -= valor;
        console.log(`\nVocê gastou G$ ${valor}. Você ainda possui G$ ${this.gil}\n`);
    }

    guardarGil(valor) {
        this.gil += valor;
        console.log(`\nVocê recebeu G$ ${valor}. Você possui G$ ${this.gil}\n`);
        console.log("Tô rico!\n");
    }
}

module.exports = Heroi;
