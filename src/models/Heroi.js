const Personagem = require("./Personagem");

class Heroi extends Personagem {
    constructor(nome, nivel, vida, atqNormal, defesa) {
        super(nome, vida, atqNormal, defesa);
        this.nome = nome
        this.nivel = nivel;
        this.vida = vida;
        this.atqNormal = atqNormal;
        this.defesa = defesa;        
        this.gil = 50;
        this.bolsa = {
            pocoes: 0,
            elixires:0
        };
    }

    exibirStatus() {
        console.log(`Nível: ${this.nivel}\nVida: ${this.vida}\nAtaque: ${this.atqNormal}\nDefesa: ${this.defesa}`);
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
        console.log(`\nVocê recebeu um ataque. OUCH!`);
        this.exibirVida();
    }

    levelUp() {
        console.log("Parabéns, você subiu de nível!");
        this.nivel++;
        this.vida += 10;
        this.atqNormal += 5;
        this.defesa += 2;        
        this.exibirStatus();
    }

    gastarGil(valor) {
        this.gil -= valor;
        console.log(`\nVocê gastou G$ ${valor}. Você possui G$ ${this.gil}\n`);
    }

    guardarGil(valor) {
        this.gil += valor;
        console.log(`\nVocê recebeu G$ ${valor}. Você possui G$ ${this.gil}\n`);
        console.log("Tô rico!\n");
    }
}

module.exports = Heroi;
