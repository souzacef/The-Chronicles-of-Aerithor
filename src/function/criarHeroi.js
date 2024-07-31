const prompt = require("prompt-sync")();
const Heroi = require("../models/Heroi");
const { promisify } = require("util");

const delay = promisify(setTimeout);

// Função assíncrona para criar o herói principal do jogo
async function criarHeroi() {
    let nome;

    console.log("\nComo escolhido pelo Conselho dos Sábios, você tem o direito de decidir como quer ser conhecido. ");

    // Aguarda 2 segundos antes de solicitar o nome
    await delay(2000);

    const nomeRegex = /^[a-zA-Z]+$/;

    // Loop para garantir que o nome do herói seja válido
    do {
        console.log("Escolha com sabedoria e não use espaços, caracteres especiais ou números.\n");
        nome = prompt("Qual nome deseja utilizar em sua jornada, bravo herói? ").trim();
        if (!nome) {
            // Caso o nome seja vazio
            await delay(500);
            console.log("\nO nome não pode ser vazio. Por favor, insira um nome, valente guerreiro.");
        } else if (!nomeRegex.test(nome)) {
            // Caso o nome não atenda aos critérios
            await delay(500);
            console.log("O nome deve conter apenas letras, sem espaços ou caracteres especiais. Tente novamente.");
            nome = '';
        }
    } while (!nome);

    // Aguarda 1 segundo antes de continuar
    await delay(1000);

    console.log(`\n${nome}! Assim como na profecia!\n`);

    // Aguarda 1 segundo antes de continuar
    await delay(1000);

    console.log("Com o nome aprovado pelo Conselho dos Sábios, você começa sua jornada épica. Prepare-se para\nenfrentar desafios e provar seu valor nas terras místicas de Aetherion.\n");

    // Aguarda 2 segundos antes de continuar
    await delay(2000);

    // Inicialização dos atributos do herói
    let nivel = 1;
    let vida = 100;
    let atqNormal = 12;
    let defesa = 3;

    // Criação do objeto herói
    const heroi = new Heroi(nome, nivel, vida, atqNormal, defesa);
    // Exibição do status inicial do herói
    heroi.exibirStatus();

    // Aguarda 3 segundos antes de retornar o herói
    await delay(3000);

    return heroi;
}

// Exporta a função criarHeroi para uso em outras partes do jogo
module.exports = criarHeroi;
