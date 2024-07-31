const Personagem = require("./Personagem");

class Heroi extends Personagem {
    constructor(nome, nivel, vida, atqNormal, defesa) {
        super(nome, vida, atqNormal, defesa);
        this.nivel = nivel;
        this.gil = 50;
        this.bolsa = {
            pocoes: 0,
            elixires: 0
        };
    }

    // Exibe o status atual do herói
    exibirStatus() {
        console.log(`Nível: ${this.nivel}\nVida: ${this.vida}\nAtaque: ${this.atqNormal}\nDefesa: ${this.defesa}`);
    }

    // Sobrescreve o método exibirVida para incluir uma linha em branco
    exibirVida() {
        console.log();
        console.log(`Vida: ${this.vida}`);
        console.log();
    }

    // Aumenta a vida do herói
    curar() {
        this.vida += 50;
        console.log("\nVida restaurada em 50 pontos\n");
    }

    // Aumenta a força de ataque do herói
    aumentarForca() {
        this.atqNormal += 10;
        console.log(`\nForça aumentou em 10 pontos. Força atual: ${this.atqNormal}\n`);
    }

    // Recebe dano e atualiza a vida do herói
    receberDano(dano) {
        this.vida -= dano;
        console.log(`\nVocê recebeu um ataque. OUCH!`);
        this.exibirVida();
    }

    // Incrementa o nível e melhora os atributos do herói
    levelUp() {
        console.log("Parabéns, você subiu de nível!");
        this.nivel++;
        this.vida += 10;
        this.atqNormal += 5;
        this.defesa += 2;        
        this.exibirStatus();
    }

    // Reduz o Gil (moeda do jogo) do herói
    gastarGil(valor) {
        this.gil -= valor;
        console.log(`\nVocê gastou G$ ${valor}. Você possui G$ ${this.gil}\n`);
    }

    // Adiciona Gil ao inventário do herói
    guardarGil(valor) {
        this.gil += valor;
        console.log(`\nVocê recebeu G$ ${valor}. Você possui G$ ${this.gil}\n`);
        console.log("Tô rico!\n");
    }
}

// Exporta a classe Heroi para uso em outras partes do jogo
module.exports = Heroi;
