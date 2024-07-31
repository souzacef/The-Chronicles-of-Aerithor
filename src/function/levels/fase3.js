const prompt = require("../../prompt/prompt"); // Importa o módulo de prompt para entrada do usuário

const Inimigo = require("../../models/Inimigo"); // Importa o modelo de Inimigo
const { promisify } = require("util"); // Importa a função utilitária promisify
const batalha = require("../batalha"); // Importa a função de batalha

const delay = promisify(setTimeout); // Converte setTimeout para uma função que retorna uma Promise

//Função que representa a fase 3 do jogo
async function fase3(heroi) {
    await delay(1000);

    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");
    
    await delay(3000);
    console.log("De volta a Lumoria, você encontra Elara, uma poderosa feiticeira que pode ajudá-lo a recuperar a Coroa\nde Aetherion, escondida nas Ruínas Antigas.\n");

    await delay(2000);
    console.log(`Elara: ${heroi.nome}, a Coroa de Aetherion está protegida por poderosas magias. Eu posso te ajudar a atravessar\nas barreiras, mas precisaremos de ingredientes para um feitiço.\n`);

    await delay(2000);
    console.log("Pode contar comigo.\n");

    await delay(1000);
    console.log("Você parte em busca dos ingredientes necessários. Encontra um grupo de lobos no caminho.\n");

    await delay(1000);
    // Loop para decisão do jogador sobre como proceder
    do {
        escolha = prompt("1 - Lutar contra os lobos, ou 2 - Usar furtividade? ");
        if (escolha != '1' && escolha != '2') {
            await delay(500);
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 

    } while(escolha != '1' && escolha != '2');

        if (escolha == "1") {
            // Escolha de lutar contra os lobos
            await delay(500);

            const fenrir = new Inimigo("Fenrir" , 55, 12, 8); // Cria o inimigo Fenrir
            await batalha(heroi, fenrir); // Inicia a batalha com Fenrir

            await delay(1000);
            console.log("\nVocê enfrenta os lobos e consegue os ingredientes. Sai ferido mas ganha um nível.\n");
        } else {
            // Escolha de usar furtividade
            await delay(500);
            console.log("\nVocê evita os lobos e consegue pegar os ingredientes sem ser detectado.\n");

            await delay(200);
            heroi.levelUp();// Aumenta o nível do herói
        }
    console.log("\nCom os ingredientes em mãos, você se dirige de volta a Lumoria.\n")
    
    await delay(2000);    
    console.log("No caminho, um velho sábio cruza seu caminho. Ele canta uma canção antiga enquanto fuma seu cachimbo,\nsua barba grande balançando ao vento.\n");

    await delay(2000);
    console.log("O sábio veste um manto cinza e um chapéu pontudo, apoiando-se em um cajado. Ao lado dele, um cavalo\nbranco majestoso galopa graciosamente, como se fosse o próprio rei dos cavalos. O velho acena para você,\ndando um sorriso enigmático antes de seguir seu caminho.\n");

    await delay(2000);
    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");

    await delay(3000);
    console.log("De volta a Lumoria, você entrega os ingredientes para Elara, que começa a preparar o feitiço.\n");

    await delay(1000);
    console.log("\nCom os ingredientes em mãos, Elara conjura o feitiço e você atravessa as barreiras mágicas das\nRuínas Antigas.");

    await delay(2000);
    console.log("\n========================================================================================================");
    console.log("============================================ Ruínas Antigas ============================================");    
    console.log("========================================================================================================\n");
    
    await delay(3000);
    console.log("Dentro das ruínas, você encontra a Coroa de Aetherion, mas um dragão guardião surge para protegê-la.");

    await delay(2000);
    console.log("\nSmaug: Só o verdadeiro herói pode tomar a Coroa de Aetherion. Prove seu valor!\n");

    await delay(2000);    
    // Loop para decisão do jogador sobre enfrentar ou acalmar o dragão
    do {
        escolha = prompt("1 - Lutar contra o dragão, ou 2 - Tentar acalmar o Dragão? ");
        if (escolha != '1' && escolha != '2') {             
            await delay(500);
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2');

    if (escolha == "1") {
        // Escolha de lutar contra o dragão
        await delay(500);
        const smaug = new Inimigo("Smaug" , 60, 15, 10); // Cria o inimigo Smaug
        await batalha(heroi,smaug ); // Inicia a batalha com Smaug
        await delay(1000);

        console.log("\nVocê enfrenta o dragão em uma batalha épica. Suas habilidades são testadas ao máximo, mas você prevalece,\nganhando a Coroa de Aetherion.");
        await delay(1000);
    } else {
        // Escolha de acalmar o dragão
        await delay(1000);
        console.log("\nVocê combina os poderes da Lâmina de Valtor e do Cristal de Lumen para acalmar o dragão, que reconhece\nsua verdadeira força e permite que você tome a Coroa de Aetherion.");
    }

    await delay(2000);
    console.log("\nCom a Coroa de Aetherion em mãos, você retorna a Lumoria, pronto para a batalha final contra Azrak.\n");
}

module.exports = fase3; // Exporta a função fase3