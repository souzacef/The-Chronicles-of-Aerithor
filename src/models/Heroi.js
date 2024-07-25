const Personagem = require("./Personagem");

class Heroi extends Personagem {
    constructor(nome, nivel, atributos) {
        super(nome, atributos.vida, atributos.atqNormal, atributos.defesa, atributos.atqEspecial);
        this.nivel = nivel;
        this.gil = 30;
        this.atributos = atributos; 
    }

    exibirStatus() {
        console.log();
        console.log(`Nível: ${this.nivel}\nVida: ${this.atributos.vida}\nAtaque: ${this.atributos.atqNormal}\nDefesa: ${this.atributos.defesa}\nEspecial: ${this.atributos.atqEspecial}\n`);
        console.log();
    }

    exibirVida() {
        console.log();
        console.log(`Vida: ${this.atributos.vida}`);
        console.log();
    }

    curar() {
        this.atributos.vida += 50;
        console.log("\nVida restaurada em 50 pontos\n");
    }

    aumentarForca() {
        this.atributos.atqNormal += 10;
        console.log(`\nForça aumentou em 10 pontos. Força atual: ${this.atributos.atqNormal}\n`);
    }

    receberDano(dano) {
        this.atributos.vida -= dano;
        console.log(`\nVocê foi atacado. OUCH!\n`);
        this.exibirVida();
    }

    levelUp() {
        console.log(`\nParabéns, você subiu de nível!`);
        this.nivel++;
        this.atributos.vida += 10;
        this.atributos.atqNormal += 5;
        this.atributos.defesa += 3;
        this.atributos.Personagem += 5;
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
