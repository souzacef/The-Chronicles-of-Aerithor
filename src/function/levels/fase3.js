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
    console.log("Você parte em busca dos ingredientes necessários. Encontra um grupo de lobos no caminho.\n");

    
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
    console.log("\nCom os ingredientes em mãos, você se dirige de volta a Lumoria.")
    
    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");

    console.log("No caminho, um velho sábio cruza seu caminho. Ele canta uma canção antiga enquanto fuma seu cachimbo,\nsua barba grande balançando ao vento.");
    console.log("O sábio veste um manto cinza e um chapéu pontudo, apoiando-se em um cajado. Ao lado dele, um cavalo\nbranco majestoso galopa graciosamente, como se fosse o próprio rei dos cavalos. O velho acena para você,\ndando um sorriso enigmático antes de seguir seu caminho.\n");
    console.log("De volta a Lumoria, você entrega os ingredientes para Elara, que começa a preparar o feitiço.\n");
    console.log("\nCom os ingredientes em mãos, Elara conjura o feitiço e você atravessa as barreiras mágicas das\nRuínas Antigas.");

    console.log("\n========================================================================================================");
    console.log("============================================ Ruínas Antigas ============================================");    
    console.log("========================================================================================================\n");
    
    console.log("Dentro das ruínas, você encontra a Coroa de Aetherion, mas um dragão guardião surge para protegê-la.");
    console.log("\nSmaug: Só o verdadeiro herói pode tomar a Coroa de Aetherion. Prove seu valor!\n");


    
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
        console.log("\nVocê combina os poderes da Lâmina de Valtor e do Cristal de Lumen para acalmar o dragão, que reconhece\nsua verdadeira força e permite que você tome a Coroa de Aetherion.");
    }

    console.log("\nCom a Coroa de Aetherion em mãos, você retorna a Lumoria, pronto para a batalha final contra Azrak.\n");
}

module.exports = fase3;