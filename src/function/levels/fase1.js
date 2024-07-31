const prompt = require("../../prompt/prompt"); // Importa o módulo de prompt para entrada do usuário

const Inimigo = require("../../models/Inimigo"); // Importa o modelo de Inimigo
const { promisify } = require("util"); // Importa a função utilitária promisify
const batalha = require("../batalha"); // Importa a função de batalha

const delay = promisify(setTimeout); // Converte setTimeout para uma função que retorna uma Promise

//Função que representa a fase 1 do jogo
async function fase1(heroi) {

    console.log(`\nAssim, nosso herói ${heroi.nome} inicia sua aventura. Sua primeira parada: Aldeia de Thaloria.`);
    await delay(1000); // Aguarda 1 segundo antes de continuar

    console.log("\n========================================================================================================");
    console.log("========================================== Aldeia de Thaloria ==========================================");
    console.log("========================================================================================================\n");
    
    await delay(3000);
    console.log("Thaloria é uma pacata aldeia aninhada entre colinas verdejantes e florestas encantadas. Suas casas de\nmadeira e telhados de palha se misturam harmoniosamente com a natureza ao redor. A aldeia é conhecida\npor seu ambiente acolhedor e pela presença de um antigo conselho de sábios que guia seus habitantes.");

    await delay(2000);
    console.log(`\nAo partir de Thaloria, o herói atravessa campos floridos e trilhas sinuosas até chegar à vila de Lumoria,\nonde encontra o mercado vibrante e os comerciantes amigáveis.`);

    await delay(2000);
    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");       

    await delay(3000);
    console.log("Entre os vendedores, destaca-se Lyria, a sábia curandeira, que o recebe com um sorriso acolhedor. Com um\nolhar perspicaz, Lyria se aproxima para oferecer sua ajuda ao herói em sua jornada.\n");
    await delay(2000);

    let escolha;    
    console.log("Lyria: Bem-vindo a Lumoria, herói. Sou Lyria, uma guerreira desta cidade. Precisamos de sua ajuda.\nAs terras ao redor estão infestadas por criaturas das sombras.\n");

    await delay(1000);
    // Loop para garantir uma entrada válida do usuário
    do {
        escolha = prompt("Você está pronto para lutar? Digite 1 - Sim ou 2 - Não: ").trim();
        if (escolha != '1' && escolha != '2') {
            console.log("Opção inválida, jovem gafanhoto. Tente novamente. ");
        }
    } while (escolha != '1' && escolha != '2');
    
    if (escolha == '1') {
        await delay(500);
        console.log("\nSim, estou pronto para lutar.");
        await delay(500);

        console.log("\nLyria: Ótimo! Vamos treinar primeiro para garantir que você esteja preparado.\n");
        await delay(1000);

        console.log("Você segue Lyria até o campo de treinamento, onde ela lhe ensina as técnicas básicas de combate.");        
        await delay(1000);

        // Cria uma instância de Inimigo para o treino
        const lyria = new Inimigo("Lyria", 30, 6, 3);
        await batalha(heroi, lyria);                
    } else {
        await delay(500);
        console.log("\nAinda não, preciso me preparar mais.");
        await delay(1000);

        console.log("Lyria: Entendo. Treine e prepare-se. As sombras não esperam.\n");
        await delay(2000);

        console.log("Você decide explorar a cidade e visitar os comerciantes locais para melhorar seu equipamento.");
        await delay(1000);

        console.log("Após se preparar, você sente que está pronto para enfrentar Lyria em combate.\n");
        await delay(1000);
        
        // Cria uma instância de Inimigo para o treino
        const lyria = new Inimigo("Lyria", 30, 6, 3);

        await batalha(heroi, lyria);// Inicia a batalha de treino
    } 

    await delay(2000);
    console.log("\nApós um intenso treinamento com Lyria, você está pronto para enfrentar os desafios de Aetherion. Sua\nprimeira missão é recuperar a Lâmina de Valtor, escondida nas profundezas da Floresta Negra.");
    await delay(1000);

    console.log("\n========================================================================================================");
    console.log("============================================ Floresta Negra ============================================"); 
    console.log("========================================================================================================\n");

    await delay(3000);
    console.log("A Floresta Negra é um vasto e sombrio bosque, onde árvores antigas se entrelaçam formando um denso teto");
    console.log("de folhas que bloqueia a luz do sol. O ar é pesado com o cheiro de terra úmida e a sensação de uma");
    console.log("presença misteriosa em cada sombra. Atravessando a floresta, você se depara com um caminho bifurcado.\n");
       
    await delay(2000);
    // Loop para garantir uma entrada válida do usuário
    do {
        escolha = prompt("Qual caminho seguir? Digite 1 - trilha iluminada ou 2 - trilha escura. ")
        if (escolha != '1' && escolha != '2') {
            await delay(500);
            console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");
        }
    } while(escolha != '1' && escolha != '2')
    
    if (escolha == '1') {
        await delay(500);
        console.log("\nA trilha iluminada leva a um campo aberto onde você encontra uma pequena cabana.");
        await delay(1000);

        console.log("Dentro, há um baú, com uma poção de cura.\n");

        // Incrementa o número de poções na bolsa do herói
        heroi.bolsa.pocoes++;
        console.log(`Quantidade de poções: ${heroi.bolsa.pocoes}`);
        await delay(500);
    } else {
        await delay(500);
        console.log("\nA trilha escura leva a uma emboscada de goblins. ");

        // Cria uma instância de Inimigo para a batalha com Gruk
        const gruk = new Inimigo("Gruk", 35, 6, 5);
        await delay(1000);

        await batalha(heroi, gruk); // Batalha com o goblin Gruk       
    }

    console.log("Você continua sua jornada pela floresta até encontrar uma árvore gigante com a Lâmina de Valtor cravada\nem seu tronco. Um guardião surge, exigindo que você prove seu valor.\n");
    await delay(1000);

    console.log("Guardião: Só aqueles de coração puro e força verdadeira podem brandir a Lâmina de Valtor. Prove seu\nvalor, herói.\n");
    await delay(1000);

    console.log("O herói coça a cabeça, em introspecção...");
    await delay(500);

    console.log("Resolvo na pancada ou na lábia?\n");

    // Loop para garantir uma entrada válida do usuário
    do {
        escolha = prompt("Digite 1 - Lutar ou 2 - Conversar ");
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");
        }
    } while(escolha != '1' && escolha != '2')
    
    if (escolha == "1") {
        await delay(500);
        console.log("\nVocê enfrenta o guardião em uma batalha épica.\n");
        await delay(1000);

        // Cria uma instância de Inimigo para a batalha com o guardião
        const zephyr = new Inimigo("Zephyr", 45, 8, 6)
        await batalha(heroi, zephyr); // Batalha com o guardião Zephyr
        await delay(1000);

        console.log("Suas habilidades são testadas, mas você prevalece, ganhando a Lâmina de Valtor.\n");
    } else {
        await delay(500);
        console.log("\nVocê fala ao guardião sobre sua missão e as ameaças que Aetherion enfrenta. Comovido por sua\ndeterminação e coragem, o guardião permite que você tome a Lâmina de Valtor sem lutar.");
    }

    await delay(1000);
    console.log("Com a Lâmina de Valtor em mãos, você retorna a Lumoria, pronto para o próximo desafio.");
    await delay(2000);

}

module.exports = fase1; // Exporta a função fase1