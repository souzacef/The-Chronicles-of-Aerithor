const prompt = require("../../prompt/prompt");

const Inimigo = require("../../models/Inimigo");

const batalha = require("../batalha");

function fase1(heroi) {
    console.log("\n========================================================================================================");
    console.log("========================================== Aldeia de Thaloria ==========================================");
    console.log("========================================================================================================\n");
        
    console.log("Thaloria é uma pacata aldeia aninhada entre colinas verdejantes e florestas encantadas. Suas casas de\nmadeira e telhados de palha se misturam harmoniosamente com a natureza ao redor. A aldeia é conhecida\n por seu ambiente acolhedor e pela presença de um antigo conselho de sábios que guia seus habitantes.");
    console.log(`\nAo partir de Thaloria, o herói atravessa campos floridos e trilhas sinuosas até chegar à vila de Lumoria,\nonde encontra o mercado vibrante e os comerciantes amigáveis.`);

    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");       

    console.log("Entre os vendedores, destaca-se Lyria, a sábia curandeira, que o recebe com um sorriso acolhedor. Com um\nolhar perspicaz, Lyria se aproxima para oferecer sua ajuda ao herói em sua jornada.");

    let escolha;    
    console.log("Lyria: Bem-vindo a Lumoria, herói. Sou Lyria, uma guerreira desta cidade. Precisamos de sua ajuda.\nAs terras ao redor estão infestadas por criaturas das sombras.");

    do {
        escolha = prompt("Você está pronto para lutar? Digite 1 - Sim ou 2 - Não: ").trim();
        if (escolha != '1' && escolha != '2') {
            console.log("Opção inválida, jóvem gafanhoto. Tente novamente. ");
        }
    } while (escolha != '1' && escolha != '2');
    
    if (escolha == '1') {
        console.log("\nSim, estou pronto para lutar");
        console.log("\nLyria: Ótimo! Vamos treinar primeiro para garantir que você esteja preparado.\n");
        console.log("Você segue Lyria até o campo de treinamento, onde ela lhe ensina as técnicas básicas de combate.");
        
        const lyria = new Inimigo("Lyria", 30, 6, 3);
        batalha(heroi, lyria);                
    } else {
        console.log("\nAinda não, preciso me preparar mais.");
        console.log("Lyria: Entendo. Treine e prepare-se. As sombras não esperam.\n");
        console.log("Você decide explorar a cidade e visitar os comerciantes locais para melhorar seu equipamento.");
        console.log("Após se preparar, você sente que está pronto para enfrentar Lyria em combate.\n");
        
        const lyria = new Inimigo("Lyria", 30, 6, 3);
        batalha(heroi, lyria);
    } 
    console.log("\nApós um intenso treinamento com Lyria, você está pronto para enfrentar os desafios\nde Aetherion. Sua primeira missão é recuperar a Lâmina de Valtor, escondida nas profundezas da\nFloresta Negra.");

    console.log("\n========================================================================================================");
    console.log("============================================ Floresta Negra ============================================"); 
    console.log("========================================================================================================\n");

    console.log("A Floresta Negra é um vasto e sombrio bosque, onde árvores antigas se entrelaçam formando");
    console.log("um denso teto de folhas que bloqueia a luz do sol. O ar é pesado com o cheiro de terra úmida");
    console.log("e a sensação de uma presença misteriosa em cada sombra.\n");
    console.log("Atravessando a floresta, você se depara com um caminho bifurcado.");    

    do {
        escolha = prompt("Qual caminha seguir? Digite 1 - trilha iluminada ou 2 - trilha escura. ")
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        }
    } while(escolha != '1' && escolha != '2')
    
    if (escolha == '1') {
        console.log("\nA trilha iluminada leva a um campo aberto onde você encontra uma pequena cabana.");
        console.log("Dentro, há um baú, com uma poção de cura.\n");
        heroi.bolsa.pocoes++;

    } else {
        console.log("A trilha escura leva a uma emboscada de goblins. ");
        const goblin = new Inimigo("Goblin", 35, 6, 5)
        batalha(heroi, goblin);        
    }

    console.log("Você continua sua jornada pela floresta até encontrar uma árvore gigante com a Lâmina de Valtor\ncravada em seu tronco. Um guardião surge, exigindo que você prove seu valor.\n");
    console.log("Guardião: Só aqueles de coração puro e força verdadeira podem brandir a Lâmina de Valtor. Prove\nseu valor, herói.");
    console.log("O herói coça a cabeça, em introspecção...");
    console.log("Resolvo na pancada ou na lábia?\n");

    do {
        escolha = prompt("Digite 1 - Lutar ou 2 - Conversar ");
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        }
    } while(escolha != '1' && escolha != '2')
    
    if (escolha == "1") {
        console.log("Você enfrenta o guardião em uma batalha épica.\n");
        const grifo = new Inimigo("Grifo", 45, 8, 6)
        batalha(heroi, grifo);
        console.log("Suas habilidades são testadas, mas você prevalece, ganhando a Lâmina de Valtor.\n");
    } else {
        console.log("Você fala ao guardião sobre sua missão e as ameaças que Aetherion enfrenta. Comovido por sua\ndeterminação e coragem, o guardião permite que você tome a Lâmina de Valtor sem lutar.");
    }

    console.log("Com a Lâmina de Valtor em mãos, você retorna a Lumoria, pronto para o próximo desafio.\n");

}

module.exports = fase1;