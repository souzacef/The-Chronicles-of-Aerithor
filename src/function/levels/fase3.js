const prompt = require("../../prompt/prompt");

const Inimigo = require("../../models/Inimigo");
const batalha = require("../batalha");

function fase3(heroi) {

    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");
    
    console.log("De volta a Lumoria, você encontra Elara, uma poderosa feiticeira que pode ajudá-lo a recuperar a Coroa\nde Aetherion, escondida nas Ruínas Antigas.\n");
    console.log("Elara: Herói, a Coroa de Aetherion está protegida por poderosas magias. Eu posso te ajudar a atravessar\nas barreiras, mas precisaremos de ingredientes para um feitiço.\n");
    console.log("Pode contar comigo.\n");
    console.log("Você parte em busca dos ingredientes necessários. Encontra um grupo de lobos no caminho.");

    
    do {

        escolha = prompt("1 - Lutar contra os lobos, ou 2 - Usar furtividade? ");
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 

    } while(escolha != '1' && escolha != '2')

        if (escolha == "1") {
            const fenrir = new Inimigo("Fenrir" , 55, 12, 8);
            batalha(heroi, fenrir);
            console.log("\nVocê enfrenta os lobos e consegue os ingredientes. Sai ferido mas ganha um nível.\n");
        } else {
            console.log("\nVocê evita os lobos e consegue pegar os ingredientes sem ser detectado.\n");
            heroi.levelUp();
        }
         
        
    console.log("\nCom os ingredientes em mãos, Elara conjura o feitiço e você atravessa as barreiras mágicas das\nRuínas Antigas. Dentro das ruínas, você encontra a Coroa de Aetherion, mas um dragão guardião\nsurge para protegê-la.");
    console.log("\nDragão Guardião: Só o verdadeiro herói pode tomar a Coroa de Aetherion. Prove seu valor!\n");


    
    do {
        escolha = prompt("1 - Lutar contra o dragão, ou 2 - Tentar acalmar o Dragão? ");
        if (escolha != '1' && escolha != '2') {                
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2')

    if (escolha == "1") {
        
        const smaug = new Inimigo("Smaug" , 60, 15, 10)
        batalha(heroi,smaug );        
        console.log("\nVocê enfrenta o dragão em uma batalha épica. Suas habilidades são testadas ao máximo, mas você prevalece,\nganhando a Coroa de Aetherion.");
    } else {
        console.log("\nVocê combina os poderes da Lâmina de Valtor e do Cristal de Lumen para acalmar o dragão,\nque reconhece sua verdadeira força e permite que você tome a Coroa de Aetherion.");
    }

    console.log("\nCom a Coroa de Aetherion em mãos, você retorna a Lumoria, pronto para a batalha final contra Azrak.\n");
}

module.exports = fase3;