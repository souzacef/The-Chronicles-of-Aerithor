const prompt = require("prompt-sync")();
const Heroi = require("../models/Heroi");
const Inimigo = require("../models/Inimigo");

const { promisify } = require("util");
const delay = promisify(setTimeout);

//Função de batalha entre o herói e o inimigo.
async function batalha(heroi, inimigo) {

    await delay(1000);// Pequeno atraso para efeito dramático

    let especial = 0;// Contador para o ataque especial
    console.log("========================================================================================================");
    console.log("                   ======================== Início da Batalha ========================                  ");
    console.log("========================================================================================================");

    await delay(1000);

    // Exibir status do herói e vida do inimigo
    heroi.exibirStatus();
    inimigo.exibirVida();

     // Loop da batalha, continua enquanto ambos estão vivos
    while (heroi.vida > 0 && inimigo.vida > 0) {
        const escolha = prompt("Escolha sua ação: 1 - Atacar, 2 - Usar item, 3 - Ataque especial ");

        if (escolha === "1") {
            // Ação de ataque normal
            await delay(1000);

            console.log("============================================= Seu turno ================================================\n");
            console.log("\nVocê faz um corte rápido com sua espada. ");

            await delay(500);

            // Cálculo de dano
            let dano = Math.max(0, Math.floor(heroi.atqNormal + (heroi.atqNormal * Math.random() * 0.4) - inimigo.defesa));

            await delay(200);

             // Inimigo recebe dano
            inimigo.receberDano(dano);

            await delay(200);

            console.log(`Você causou ${dano} de dano a ${inimigo.nome}`);

            await delay(200);

            // Exibir vida do inimigo após o ataque
            inimigo.exibirVida();
            
            await delay(200);

        } else if (escolha === "2") {

            // Ação de uso de item
            await delay(500);

            const itemEscolha = prompt("Escolha o item: 1 - Poção, 2 - Elixir, 3 - Voltar ");

            if (itemEscolha === "1") {

                // Ação de uso de item
                if (heroi.bolsa.pocoes > 0) {

                    await delay(500);

                    // Ação de uso de item
                    heroi.curar();

                    await delay(200);

                    // Reduz o número de poções na bolsa
                    heroi.bolsa.pocoes--;

                    await delay(200);

                } else {

                    await delay(500);

                    console.log("Você não tem mais poções na bolsa\n");

                    await delay(500);

                    continue;// Volta para o loop principal
                }
            } else if (itemEscolha === "2") {

                // Uso de elixir
                if (heroi.bolsa.elixires > 0) {

                    await delay(500);

                    heroi.aumentarForca();// Aumenta a força do herói

                    await delay(200);

                    heroi.bolsa.elixires--;// Reduz o número de elixires na bolsa

                    await delay(200);

                } else {

                    await delay(500);

                    console.log("Você não tem mais elixires na bolsa\n");

                    await delay(200);

                    continue;// Volta para o loop principal
                }
            } else if (itemEscolha === "3") {

                // Voltar ao menu de ações
                await delay(500);

                continue;// Volta para o loop principal
            } else {

                // Opção inválida
                await delay(500);

                console.log("Opção inválida.");

                await delay(200);

            }
        } else if (escolha === "3") {

            // Ação de ataque especial
            if (especial >= 3) {

                // O ataque especial está pronto
                let dano = Math.max(0, Math.floor((heroi.atqNormal * 3) - inimigo.defesa));

                await delay(500);

                inimigo.receberDano(dano);

                await delay(200);

                console.log("\nATAQUE ESPECIAL!!!!");

                await delay(200);

                console.log(`Hadouken! Você causou ${dano} de dano ao ${inimigo.nome}`);
                especial = 0;// Reinicia o contador de especial

                await delay(200);

                if (inimigo.vida <= 0) {

                    // Se o inimigo morrer
                    await delay(500);

                    console.log(`Você derrotou ${inimigo.nome}!\n`);

                    await delay(200);

                    heroi.levelUp();// O herói ganha nível

                    await delay(200);

                    return;// Encerra a batalha
                }
            } else {

                // Encerra a batalha
                await delay(500);

                console.log("Ataque especial ainda não está pronto.\n");

                await delay(200);

                continue;// Volta para o loop principal
            }
        } else {

            // Opção inválida
            await delay(500);

            console.log("Opção inválida.");

            await delay(200);

            continue;// Volta para o loop principal
        }

        // Verificação de vida do inimigo
        if (inimigo.vida <= 0) {

            await delay(500);

            console.log(`Você derrotou ${inimigo.nome}!\n`);

            await delay(200);

            heroi.levelUp();// O herói ganha nível

            await delay(200);

            return;// Encerra a batalha
        }

        // Turno do inimigo
        await delay(500);

        console.log("=========================================== Turno do inimigo ===========================================");
        let danoInimigo = Math.max(0, Math.floor(inimigo.atqNormal + (inimigo.atqNormal * Math.random() * 0.4) - heroi.defesa));

        await delay(200);

        heroi.receberDano(danoInimigo);// Herói recebe dano do inimigo

        await delay(200);

        console.log(`${inimigo.nome} causou ${danoInimigo} de dano a você`);
        
        // Herói recebe dano do inimigo
        if (heroi.vida <= 0) {

            await delay(1000);

            console.log(`\nVocê lutou bravamente, mas ${inimigo.nome} prevaleceu. Com sua derrota,\na luz de esperança em Eldoria se extingue, e a escuridão se espalha por todo o reino.\nQue sua coragem seja lembrada, herói caído.\n`);

            await delay(2000);

            console.log("\n========================================================================================================");
            console.log("=============================================== GAME OVER ==============================================");
            console.log("========================================================================================================\n");

            await delay(4000);

            process.exit();// Encerra o processo do jogo
        }

        // Carregamento do ataque especial
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
