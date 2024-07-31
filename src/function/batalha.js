const prompt = require("prompt-sync")();
const Heroi = require("../models/Heroi");
const Inimigo = require("../models/Inimigo");

const { promisify } = require("util");
const delay = promisify(setTimeout);

//Função de batalha entre o herói e o inimigo.
async function batalha(heroi, inimigo) {

    await delay(1000);

    let especial = 0;
    console.log("========================================================================================================");
    console.log("                   ======================== Início da Batalha ========================                  ");
    console.log("========================================================================================================");

    await delay(1000);

    heroi.exibirStatus();
    inimigo.exibirVida();

    while (heroi.vida > 0 && inimigo.vida > 0) {
        const escolha = prompt("Escolha sua ação: 1 - Atacar, 2 - Usar item, 3 - Ataque especial ");

        if (escolha === "1") {

            await delay(1000);

            console.log("============================================= Seu turno ================================================\n");
            console.log("\nVocê faz um corte rápido com sua espada. ");

            await delay(500);

            let dano = Math.max(0, Math.floor(heroi.atqNormal + (heroi.atqNormal * Math.random() * 0.4) - inimigo.defesa));

            await delay(200);

            inimigo.receberDano(dano);

            await delay(200);

            console.log(`Você causou ${dano} de dano a ${inimigo.nome}`);

            await delay(200);

            inimigo.exibirVida();
            
            await delay(200);

        } else if (escolha === "2") {

            await delay(500);

            const itemEscolha = prompt("Escolha o item: 1 - Poção, 2 - Elixir, 3 - Voltar ");

            if (itemEscolha === "1") {
                if (heroi.bolsa.pocoes > 0) {

                    await delay(500);

                    heroi.curar();

                    await delay(200);

                    heroi.bolsa.pocoes--;

                    await delay(200);

                } else {

                    await delay(500);

                    console.log("Você não tem mais poções na bolsa\n");

                    await delay(500);

                    continue;
                }
            } else if (itemEscolha === "2") {
                if (heroi.bolsa.elixires > 0) {

                    await delay(500);

                    heroi.aumentarForca();

                    await delay(200);

                    heroi.bolsa.elixires--;

                    await delay(200);

                } else {

                    await delay(500);

                    console.log("Você não tem mais elixires na bolsa\n");

                    await delay(200);

                    continue;
                }
            } else if (itemEscolha === "3") {

                await delay(500);

                continue;
            } else {

                await delay(500);

                console.log("Opção inválida.");

                await delay(200);

            }
        } else if (escolha === "3") {
            if (especial >= 3) {
                let dano = Math.max(0, Math.floor((heroi.atqNormal * 3) - inimigo.defesa));

                await delay(500);

                inimigo.receberDano(dano);

                await delay(200);

                console.log("\nATAQUE ESPECIAL!!!!");

                await delay(200);

                console.log(`Hadouken! Você causou ${dano} de dano ao ${inimigo.nome}`);
                especial = 0;

                await delay(200);

                if (inimigo.vida <= 0) {

                    await delay(500);

                    console.log(`Você derrotou ${inimigo.nome}!\n`);

                    await delay(200);

                    heroi.levelUp();

                    await delay(200);

                    return;
                }
            } else {

                await delay(500);

                console.log("Ataque especial ainda não está pronto.\n");

                await delay(200);

                continue;
            }
        } else {

            await delay(500);

            console.log("Opção inválida.");

            await delay(200);

            continue;
        }

        if (inimigo.vida <= 0) {

            await delay(500);

            console.log(`Você derrotou ${inimigo.nome}!\n`);

            await delay(200);

            heroi.levelUp();

            await delay(200);

            return;
        }

        await delay(500);

        console.log("=========================================== Turno do inimigo ===========================================");
        let danoInimigo = Math.max(0, Math.floor(inimigo.atqNormal + (inimigo.atqNormal * Math.random() * 0.4) - heroi.defesa));

        await delay(200);

        heroi.receberDano(danoInimigo);

        await delay(200);

        console.log(`${inimigo.nome} causou ${danoInimigo} de dano a você`);
        

        if (heroi.vida <= 0) {

            await delay(1000);

            console.log(`\nVocê lutou bravamente, mas ${inimigo.nome} prevaleceu. Com sua derrota,\na luz de esperança em Eldoria se extingue, e a escuridão se espalha por todo o reino.\nQue sua coragem seja lembrada, herói caído.\n`);

            await delay(2000);

            console.log("\n========================================================================================================");
            console.log("=============================================== GAME OVER ==============================================");
            console.log("========================================================================================================\n");

            await delay(4000);

            process.exit();
        }

        if (especial < 3) {
            especial++;
            if (especial < 3) {

                await delay(500);

                console.log(`Carregando especial...${especial}/3\n`);
            } else {

                await delay(500);

                console.log("Especial pronto!\n");
            }
        }
    }
}

module.exports = batalha;
