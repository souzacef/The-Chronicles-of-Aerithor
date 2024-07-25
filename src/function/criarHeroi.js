const prompt = require("prompt-sync")();
const Heroi = require("../models/Heroi")

function criarHeroi() {
    let nome;
    console.log("\nComo escolhido pelo Conselho dos Sábios, você tem o direito de decidir como quer ser conhecido. ");
    do {
        nome = prompt("Qual nome deseja utilizar em sua jornada, bravo herói? ").trim();
        if (!nome) {
            console.log("O nome não pode ser vazio. Por favor, insira um nome, valente guerreiro. ");
        }

        
    } while (!nome);

    console.log(`\n${nome}! Assim como na profecia! `);

    let atributos = {        
        vida: 100,
        atqNormal: 10,
        defesa: 5,
        atqEspecial: 30
    }

    let nivel = 1;

    const heroi = new Heroi(nome, nivel, atributos);
    heroi.exibirStatus();

    return heroi;
}

module.exports = criarHeroi;