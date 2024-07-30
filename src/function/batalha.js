const prompt = require("prompt-sync")();
const Heroi = require("../models/Heroi");
const Inimigo = require("../models/Inimigo");

function batalha(heroi, inimigo) {
    let especial = 0;
    console.log("========================================================================================================");
    console.log("                   ======================== Início da Batalha ========================                  ");
    console.log("========================================================================================================");
    heroi.exibirStatus();
    inimigo.exibirVida();

    while (heroi.vida > 0 && inimigo.vida > 0) {
        const escolha = prompt("Escolha sua ação: 1 - Atacar, 2 - Usar item, 3 - Ataque especial ");

        if (escolha === "1") {
            console.log("============================================= Seu turno ================================================\n");
            console.log("\nVocê faz um corte rápido com sua espada. ");
            let dano = Math.max(0, Math.floor(heroi.atqNormal + (heroi.atqNormal * Math.random() * 0.4) - inimigo.defesa));
            inimigo.receberDano(dano);
            console.log(`Você causou ${dano} de dano a ${inimigo.nome}`);
            inimigo.exibirVida();            
        } else if (escolha === "2") {
            const itemEscolha = prompt("Escolha o item: 1 - Poção, 2 - Elixir, 3 - Voltar ");

            if (itemEscolha === "1") {
                if (heroi.bolsa.pocoes > 0) {
                    heroi.curar();
                    heroi.bolsa.pocoes--;
                } else {
                    console.log("Você não tem mais poções na bolsa\n");
                    continue;
                }
            } else if (itemEscolha === "2") {
                if (heroi.bolsa.elixires > 0) {
                    heroi.aumentarForca();
                    heroi.bolsa.elixires--;
                } else {
                    console.log("Você não tem mais elixires na bolsa\n");
                    continue;
                }
            } else if (itemEscolha === "3") {
                continue;
            } else {
                console.log("Opção inválida.");
            }
        } else if (escolha === "3") {
            if (especial >= 3) {
                let dano = Math.max(0, Math.floor((heroi.atqNormal * 3) - inimigo.defesa));
                inimigo.receberDano(dano);
                console.log("\nATAQUE ESPECIAL!!!!");
                console.log(`Hadouken! Você causou ${dano} de dano ao ${inimigo.nome}`);
                especial = 0;

                if (inimigo.vida <= 0) {
                    console.log(`Você derrotou ${inimigo.nome}!\n`);
                    heroi.levelUp();
                    return;
                }
            } else {
                console.log("Ataque especial ainda não está pronto.\n");
                continue;
            }
        } else {
            console.log("Opção inválida.");
            continue;
        }

        if (inimigo.vida <= 0) {
            console.log(`Você derrotou ${inimigo.nome}!\n`);
            heroi.levelUp();
            return;
        }

        console.log("=========================================== Turno do inimigo ===========================================");
        let danoInimigo = Math.max(0, Math.floor(inimigo.atqNormal + (inimigo.atqNormal * Math.random() * 0.4) - heroi.defesa));
        heroi.receberDano(danoInimigo);
        console.log(`${inimigo.nome} causou ${danoInimigo} de dano a você`);
        

        if (heroi.vida <= 0) {
            console.log(`\nVocê lutou bravamente, mas ${inimigo.nome} prevaleceu. Com sua derrota,\na luz de esperança em Eldoria se extingue, e a escuridão se espalha por todo o reino.\nQue sua coragem seja lembrada, herói caído.\n`);
            console.log("\n========================================================================================================");
            console.log("=============================================== GAME OVER ==============================================");
            console.log("========================================================================================================\n");
            process.exit();
        }

        if (especial < 3) {
            especial++;
            if (especial < 3) {
                console.log(`Carregando especial...${especial}/3\n`);
            } else {
                console.log("Especial pronto!\n");
            }
        }
    }
}

module.exports = batalha;
