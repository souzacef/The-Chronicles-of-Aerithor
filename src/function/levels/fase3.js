const prompt = require("../prompt/prompt");

function fase3() {
    console.log("De volta a Lumoria, você encontra Elara, uma poderosa feiticeira que pode ajudá-lo a recuperar a Coroa de Aetherion, escondida nas Ruínas Antigas.");
    console.log("Elara: Herói, a Coroa de Aetherion está protegida por poderosas magias. Eu posso te ajudar a atravessar\nas barreiras, mas precisaremos de ingredientes para um feitiço.");
    console.log("Pode contar comigo.");
    console.log("Você parte em busca dos ingredientes necessários. Encontra um grupo de lobos no caminho.");

    escolha = prompt("1 - Lutar contra os lobos, ou 2 - Usar furtividade?\n");
    do {
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2')

        if (escolha == "1") {
            console.log("Você enfrenta os lobos e consegue os ingredientes, sai ferido mas ganha um nível.\n");
        } else {
            console.log("Você evita os lobos e consegue pegar os ingredientes sem ser detectado.\n");
        }

    console.log("Com os ingredientes em mãos, Elara conjura o feitiço e você atravessa as barreiras mágicas das\nRuínas Antigas.");
    console.log("Dentro das ruínas, você encontra a Coroa de Aetherion, mas um dragão guardião surge para protegê-la.");
    console.log("Dragão Guardião: Só o verdadeiro herói pode tomar a Coroa de Aetherion. Prove seu valor!\n");

    escolha = prompt("1 - Lutar contra o dragão, ou 2 - Tentar acalmar o Dragão?\n");
    do {
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2')

    if (escolha == "1") {
        console.log("Você enfrenta o dragão em uma batalha épica. Suas habilidades são testadas ao máximo,\nmas você prevalece, ganhando a Coroa de Aetherion.");
    } else {
        console.log("Você combina os poderes da Lâmina de Valtor e do Cristal de Lumen para acalmar o dragão,\nque reconhece sua verdadeira força e permite que você tome a Coroa de Aetherion.");
    }

    console.log("\nCom a Coroa de Aetherion em mãos, você retorna a Lumoria, pronto para a batalha final contra Azrak.\n");
}

module.exports = fase3;