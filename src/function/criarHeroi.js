const prompt = require("prompt-sync")();
const Heroi = require("../models/Heroi");
const { promisify } = require("util");

const delay = promisify(setTimeout);

async function criarHeroi() {
    let nome;
    console.log("\nComo escolhido pelo Conselho dos Sábios, você tem o direito de decidir como quer ser conhecido. ");

    await delay(2000);

    const nomeRegex = /^[a-zA-Z]+$/;

    do {
        console.log("Escolha com sabedoria e não use espaços, caractéres especiais ou números.\n");
        nome = prompt("Qual nome deseja utilizar em sua jornada, bravo herói? ").trim();
        if (!nome) {

            await delay(500);

            console.log("\nO nome não pode ser vazio. Por favor, insira um nome, valente guerreiro. ");
        } else if (!nomeRegex.test(nome)) {

            await delay(500);

            console.log("O nome deve conter apenas letras, sem espaços ou caracteres especiais. Tente novamente. ");
            nome = ''; 
        }
    } while (!nome);

    await delay(1000);

    console.log(`\n${nome}! Assim como na profecia!\n`);

    await delay(1000);

    console.log("Com o nome aprovado pelo Conselho dos Sábios, você começa sua jornada épica. Prepare-se para\nenfrentar desafios e provar seu valor nas terras místicas de Aetherion.\n");

    await delay(2000);

    let nivel = 1;
    let vida = 100;
    let atqNormal = 12;
    let defesa = 3;
    

    const heroi = new Heroi(nome, nivel, vida, atqNormal, defesa);
    heroi.exibirStatus();

    await delay(3000);

    return heroi;
}

module.exports = criarHeroi;
