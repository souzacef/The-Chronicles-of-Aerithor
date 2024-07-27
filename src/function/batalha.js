const prompt = require("prompt-sync")();
const Heroi = require("./models/Heroi");
const Inimigo = require("./models/Inimigo");

function batalha(heroi, adversario) {
    let especial = 0;

    console.log("\n======================== Início da Batalha ========================\n");
    heroi.exibirStatus();
    adversario.exibirVida();

    while (heroi.atributos.vida > 0 && adversario.vida > 0) {
        console.log("\nEscolha sua ação:\n1 - Atacar\n2 - Usar item\n3 - Ataque especial");
        const escolha = prompt("Escolha sua ação: ");

        if (escolha === "1") {
            let dano = Math.max(0, Math.floor(heroi.atributos.atqNormal + (heroi.atributos.atqNormal * Math.random() * 0.4) - adversario.defesa));
            adversario.receberDano(dano);
            console.log(`Você causou ${dano} de dano ao ${adversario.nome}`);
            adversario.exibirVida();
        } else if (escolha === "2") {
            console.log("\nEscolha o item:\n1 - Poção\n2 - Elixir\n3 - Voltar");
            const itemEscolha = prompt("Escolha o item: ");
            if (itemEscolha === "1") {
                if (heroi.bolsa.pocoes > 0) {
                    heroi.curar();
                    heroi.bolsa.pocoes--;
                } else {
                    console.log("Você não tem mais poções na bolsa");
                }
            } else if (itemEscolha === "2") {
                if (heroi.bolsa.elixires > 0) {
                    heroi.aumentarForca();
                    heroi.bolsa.elixires--;
                } else {
                    console.log("Você não tem mais elixires na bolsa");
                }
            } else if (itemEscolha === "3") {
                continue;
            } else {
                console.log("Opção inválida.");
            }
        } else if (escolha === "3") {
            if (especial >= 3) {
                let dano = Math.max(0, Math.floor(heroi.atributos.atqEspecial * 3 - adversario.defesa));
                adversario.receberDano(dano);
                console.log(`Hadouken! Você causou ${dano} de dano ao ${adversario.nome}`);
                especial = 0;
            } else {
                console.log("Ataque especial ainda não está pronto.");
                continue;
            }
        } else {
            console.log("Opção inválida.");
            continue;
        }

        if (adversario.vida <= 0) {
            console.log(`\nVocê derrotou ${adversario.nome}!\n`);
            heroi.levelUp();
            return;
        }

        let danoAdversario = Math.max(0, Math.floor(adversario.atqNormal + (adversario.atqNormal * Math.random() * 0.4) - heroi.atributos.defesa));
        heroi.receberDano(danoAdversario);
        console.log(`${adversario.nome} causou ${danoAdversario} de dano a você`);

        if (heroi.atributos.vida <= 0) {
            console.log("\nVocê foi derrotado. A escuridão se espalha por Eldoria.\n");
            console.log("GAME OVER");
            process.exit();
        }

        if (especial < 3) {
            especial++;
            if (especial < 3) {
                console.log("Carregando especial...");
            } else {
                console.log("Especial pronto!");
            }
        }
    }
}

module.exports = batalha;
