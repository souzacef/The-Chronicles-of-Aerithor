const prompt = require("../prompt/prompt");

function introducao() {
    console.log("\n======================================== As Crônica de Aerithor ========================================\n");
    console.log("\nNas terras místicas de Eldoria, onde a magia e a tecnologia coexistem de maneira intrincada, há um\nequilíbrio delicado mantido pelas Três Grandes Relíquias: A Lâmina de Valtor, o Cristal de Lumen\ne a Coroa de Aetherion. Essas relíquias foram forjadas na Era dos Primordiais para proteger o mundo\ndas forças da escuridão.\n");
    console.log("Por séculos, Eldoria prosperou em paz sob a proteção das relíquias. No entanto, um mal antigo, há muito\nadormecido, despertou. Azrak, o Senhor das Sombras, um ser de pura maldade, deseja apoderar-se das relíquias\npara mergulhar Eldoria na escuridão eterna.\n");
    console.log("\nVocê, herói, foi escolhido pelo Conselho dos Sábios para embarcar em uma jornada épica para recuperar\nas relíquias antes que Azrak as encontre. Sua aventura começa na pacata aldeia de Thaloria.\n");
}

function epilogo() {
    console.log("\n            =================================== Epílogo =======================================            \n");
    console.log("Eldorion, o Sábio:");
    console.log("Parabéns, herói. Com Azrak derrotado, as Três Grandes Relíquias estão seguras e Eldoria pode finalmente\nrespirar em paz. Você será lembrado como o Salvador de Eldoria, e sua história será contada por gerações.\n");
    
    console.log("Lyria:");
    console.log("Foi uma honra lutar ao seu lado. Sempre terei um lugar para você em Lumoria.\n");

    console.log("Thoren:");
    console.log("Volte sempre que precisar de bons negócios, herói. Tenho certeza de que nossas\njornadas se cruzarão novamente.\n");

    console.log("Elara:");
    console.log("Seu destino é grandioso, herói. A magia de Eldoria sempre estará ao seu lado.\n");

    console.log("E assim, a paz e a prosperidade retornam a Eldoria. O herói é celebrado em\ntodas as terras, e uma nova era de luz e esperança começa.\n");
    console.log("                               Fim!\n");
}

function chegadaEmThaloria() {
    console.log("\n========================================================================================================");
    console.log("========================================== Aldeia de Thaloria ==========================================");
    console.log("========================================================================================================\n");    
    console.log("Thaloria é uma pacata aldeia aninhada entre colinas verdejantes e florestas encantadas. Suas casas de\n madeira e telhados de palha se misturam harmoniosamente com a natureza ao redor. A aldeia é\nconhecida por seu ambiente acolhedor e pela presença de um antigo conselho de sábios que guia seus\nhabitantes.");
    console.log(`\nAo partir de Thaloria, o herói atravessa campos floridos e trilhas sinuosas até chegar à vila\nde Lumoria, onde encontra o mercado vibrante e os comerciantes amigáveis. Entre os vendedores,\ndestaca-se Lyria, a sábia curandeira, que o recebe com um sorriso acolhedor. Com um olhar perspicaz,\nLyria se aproxima para oferecer sua ajuda ao herói em sua jornada.\n`);
}

function dialogoLyria() {
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
}

function fase1() {
    console.log("Após um intenso treinamento com Lyria, você está pronto para enfrentar os desafios\nde Eldoria. Sua primeira missão é recuperar a Lâmina de Valtor, escondida nas profundezas da\nFloresta Negra.\n");
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
        console.log("Você fala ao guardião sobre sua missão e as ameaças que Eldoria enfrenta. Comovido por sua\ndeterminação e coragem, o guardião permite que você tome a Lâmina de Valtor sem lutar.");
    }

    console.log("\nCom a Lâmina de Valtor em mãos, você retorna a Lumoria, pronto para o próximo desafio.\n");

}

module.exports = {
    introducao,
    epilogo,
    chegadaEmThaloria,
    dialogoLyria,
    fase1,

};
