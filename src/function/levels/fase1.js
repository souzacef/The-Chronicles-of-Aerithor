const prompt = require("../prompt/prompt");

function fase1() {
    console.log("\n========================================================================================================");
    console.log("========================================== Aldeia de Thaloria ==========================================");
    console.log("========================================================================================================\n");    
    console.log("Thaloria é uma pacata aldeia aninhada entre colinas verdejantes e florestas encantadas. Suas casas de\n madeira e telhados de palha se misturam harmoniosamente com a natureza ao redor. A aldeia é\nconhecida por seu ambiente acolhedor e pela presença de um antigo conselho de sábios que guia seus\nhabitantes.");
    console.log(`\nAo partir de Thaloria, o herói atravessa campos floridos e trilhas sinuosas até chegar à vila\nde Lumoria, onde encontra o mercado vibrante e os comerciantes amigáveis. Entre os vendedores,\ndestaca-se Lyria, a sábia curandeira, que o recebe com um sorriso acolhedor. Com um olhar perspicaz,\nLyria se aproxima para oferecer sua ajuda ao herói em sua jornada.\n`);

    let escolha;    
    console.log("Lyria: Bem-vindo a Lumoria, herói. Sou Lyria, uma guerreira desta cidade. Precisamos de sua ajuda.\nAs terras ao redor estão infestadas por criaturas das sombras.");

    do {
        escolha = prompt("\nVocê está pronto para lutar? Digite 1 - Sim ou 2 - Não: ").trim();
        if (escolha != '1' && escolha != '2') {
            console.log("Opção inválida, jóvem gafanhoto. Tente novamente. ");
        }
    } while (escolha != '1' && escolha != '2');
    
    if (escolha == '1') {
        console.log("\nSim, estou pronto para lutar");
        console.log("Lyria: Ótimo! Vamos treinar primeiro para garantir que você esteja preparado.\n");
        console.log("Você segue Lyria até o campo de treinamento, onde ela lhe ensina as técnicas básicas de combate.");
        console.log("Após um treinamento intenso, você se sente mais confiante e preparado para enfrentar as sombras.\n");
    } else {
        console.log("\nAinda não, preciso me preparar mais.");
        console.log("Lyria: Entendo. Treine e prepare-se. As sombras não esperam.\n");
        console.log("Você decide explorar a cidade e visitar os comerciantes locais para melhorar seu equipamento.");
        console.log("Após se preparar, você sente que está pronto para enfrentar os desafios que virão.");
    } 
    console.log("Após um intenso treinamento com Lyria, você está pronto para enfrentar os desafios\nde Aetherion. Sua primeira missão é recuperar a Lâmina de Valtor, escondida nas profundezas da\nFloresta Negra.\n");
    console.log("A Floresta Negra é um vasto e sombrio bosque, onde árvores antigas se entrelaçam formando");
    console.log("um denso teto de folhas que bloqueia a luz do sol. O ar é pesado com o cheiro de terra úmida");
    console.log("e a sensação de uma presença misteriosa em cada sombra.\n");
    console.log("Atravessando a floresta, você se depara com um caminho bifurcado.");
    console.log("Digite 1 - trilha iluminada ou 2 - trilha escura. ");

    do {
        escolha = prompt("Qual caminha seguir?\n")
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        }
    } while(escolha != '1' && escolha != '2')
    
    if (escolha == '1') {
        console.log("\nA trilha iluminada leva a um campo aberto onde você encontra uma pequena cabana.");
        console.log("Dentro, há um baú, com uma poção de cura.\n");
    } else {
        console.log("A trilha escura leva a uma emboscada de goblins. Você luta bravamente, mas sai ferido.");
    }

    console.log("Você continua sua jornada pela floresta até encontrar uma árvore gigante com a Lâmina de Valtor\ncravada em seu tronco. Um guardião surge, exigindo que você prove seu valor.\n");
    console.log("Guardião: Só aqueles de coração puro e força verdadeira podem brandir a Lâmina de Valtor.\n Prove seu valor, herói.");
    console.log("O herói coça a cabeça, em introspecção...");
    console.log("Resolvo na pancada ou na lábia?\n");

    do {
        escolha = prompt("Digite 1 - Lutar ou 2 - Conversar\n");
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        }
    } while(escolha != '1' && escolha != '2')
    
    if (escolha == "1") {
        console.log("Você enfrenta o guardião em uma batalha épica. Suas habilidades são testadas, mas você prevalece,\nganhando a Lâmina de Valtor.");
    } else {
        console.log("Você fala ao guardião sobre sua missão e as ameaças que Aetherion enfrenta. Comovido por sua\ndeterminação e coragem, o guardião permite que você tome a Lâmina de Valtor sem lutar.");
    }

    console.log("\nCom a Lâmina de Valtor em mãos, você retorna a Lumoria, pronto para o próximo desafio.\n");

}

module.exports = fase1;