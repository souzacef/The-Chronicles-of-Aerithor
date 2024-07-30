const prompt = require("../../prompt/prompt");

const Inimigo = require("../../models/Inimigo");
const batalha = require("../batalha");
const { promisify } = require("util");

const delay = promisify(setTimeout);

async function faseFinal(heroi) {

    await delay(2000);

    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");
    
    await delay(3000);

    console.log("\nCom as Três Grandes Relíquias em mãos, você se prepara para a batalha final contra Azrak, o\nSenhor das Sombras. A batalha ocorre no Castelo das Sombras, um lugar repleto de perigos e armadilhas.");

    await delay(2000);

    console.log("\n========================================================================================================");
    console.log("========================================== Castelo das Sombras ========================================="); 
    console.log("========================================================================================================\n");

    await delay(3000);

    console.log("\nAzrak: Finalmente, o herói aparece. Você realmente acredita que pode me deter? Eu, que fui forjado nas\ntrevas e alimentado pelo ódio?\n");

    await delay(1000);   

    do {
        escolha = prompt("1 - Eu não estou sozinho... ou 2 - Você será derrotado... ");
        if (escolha != '1' && escolha != '2') {

            await delay(500);

            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2')

    if (escolha == "1") {

        await delay(500);

        console.log("\nEu não estou sozinho. A luz de Aetherion está comigo.");

        await delay(1000);

        console.log("\nAzrak: Veremos quanto tempo sua luz durará em minhas trevas.");
    } else {

        await delay(500);

        console.log("\nVocê será derrotado, assim como todos os outros antes de você.");

        await delay(1000);

        console.log("\nAzrak: Palavras ousadas para alguém que está prestes a cair diante do poder das sombras.");
    }

    await delay(1000);

    console.log("\nA BATALHA FINAL COMEÇA.\n");

    await delay(1000);

    const azrak = new Inimigo("Azrak, o Senhor das Sombras" , 120, 20, 15);
    batalha(heroi, azrak);

    await delay(1000);

    console.log("\nEm um momento de descuido de Azrak, você percebe que a hora de agir chegou.\n");

    await delay(1000);

    console.log("Com um movimento rápido, você coloca a Coroa de Aetherion sobre sua cabeça. De imediato, uma energia\nancestral começa a fluir através de você. O conhecimento dos antigos reis e o poder dos deuses inunda\nsua mente e corpo, fortalecendo seu espírito. Com sua mente clara e coração decidido, você encara Azrak\ncom uma nova determinação.\n");

    await delay(2000);

    console.log("\nEm seguida, você ergue o Cristal de Lumen. O cristal, carregado com a luz pura do cosmos, começa a\nbrilhar intensamente. Uma onda de luz radiante se expande pelo campo de batalha, dissipando a escuridão\nao redor de Azrak. As sombras que protegiam o vilão se desvanecem, deixando-o exposto e vulnerável.\nAzrak grita de raiva e dor enquanto a luz queima sua essência sombria.\n");

    await delay(2000);

    console.log("\nPor fim, com a fúria dos heróis passados, você saca a Lâmina de Valtor. A espada, resplandecente em luz,\nvibra com energia divina. Você avança contra Azrak, cada passo um tamborilar do destino. Com precisão e\npoder, você desferra golpes poderosos, cada corte um grito de justiça. A lâmina atravessa as defesas de\nAzrak, rasgando sua carne sombria e espalhando a escuridão ao vento.\n");

    await delay(2000);

    console.log("Após uma intensa batalha, você finalmente derrota Azrak, destruindo suas forças sombrias e trazendo paz\na Aetherion. O reino celebra sua vitória e você é saudado como o maior herói de todos os tempos.");

    await delay(2000);

    console.log("Com a vitória, você ergue a Coroa de Aetherion, o Cristal de Lumen e a Lâmina de Valtor em triunfo.\nO reino é salvo, e você é saudado como o herói que trouxe a luz de volta a Aetherion. A jornada foi\nlonga e árdua, mas o bem triunfou sobre o mal. Agora, o futuro brilha com esperança e promessa.");
}

module.exports = faseFinal;