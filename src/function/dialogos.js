const prompt = require("../prompt/prompt");

function introducao() {
    console.log("\n======================================== As Crônica de Aerithor ========================================\n");
    console.log("\nNas terras místicas de Aetherion, onde a magia e a tecnologia coexistem de maneira intrincada, há um\nequilíbrio delicado mantido pelas Três Grandes Relíquias: A Lâmina de Valtor, o Cristal de Lumen\ne a Coroa de Aetherion. Essas relíquias foram forjadas na Era dos Primordiais para proteger o mundo\ndas forças da escuridão.\n");
    console.log("Por séculos, Aetherion prosperou em paz sob a proteção das relíquias. No entanto, um mal antigo, há muito\nadormecido, despertou. Azrak, o Senhor das Sombras, um ser de pura maldade, deseja apoderar-se das relíquias\npara mergulhar Aetherion na escuridão eterna.\n");
    console.log("\nVocê, herói, foi escolhido pelo Conselho dos Sábios para embarcar em uma jornada épica para recuperar\nas relíquias antes que Azrak as encontre. Sua aventura começa na pacata aldeia de Thaloria.\n");
}

function epilogo() {
    console.log("\n            =================================== Epílogo =======================================            \n");
    console.log("Eldorion, o Sábio:");
    console.log("Parabéns, herói. Com Azrak derrotado, as Três Grandes Relíquias estão seguras e Aetherion pode finalmente\nrespirar em paz. Você será lembrado como o Salvador de Aetherion, e sua história será contada por gerações.\n");
    
    console.log("Lyria:");
    console.log("Foi uma honra lutar ao seu lado. Sempre terei um lugar para você em Lumoria.\n");

    console.log("Thoren:");
    console.log("Volte sempre que precisar de bons negócios, herói. Tenho certeza de que nossas\njornadas se cruzarão novamente.\n");

    console.log("Elara:");
    console.log("Seu destino é grandioso, herói. A magia de Aetherion sempre estará ao seu lado.\n");

    console.log("E assim, a paz e a prosperidade retornam a Aetherion. O herói é celebrado em\ntodas as terras, e uma nova era de luz e esperança começa.\n");
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

function fase2() {
    console.log("De volta a Lumoria, você encontra Thoren, um mercador conhecido por seus\nitens raros e poderosos.\nEle oferece itens que podem ajudar em sua próxima missão: recuperar o Cristal de\nLumen, escondido nas Montanhas Sombrias.\n");
    console.log("Thoren: Saudações, herói! Bem-vindo à minha loja. Sou Thoren, o mercador\nmais astuto destas terras. Como posso ajudá-lo hoje?\nVocê pode comprar itens valiosos, treinar suas habilidades,\nou simplesmente sair e continuar sua jornada\n");

    escolha = prompt("1 - Comprar itens, 2- Treinar ou 3 - Sair?\n");

    do {
        if (escolha != '1' && escolha != '2' && escolha != '3') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        }
    } while (escolha != '1' && escolha != '2' && escolha != '3')

    if (escolha == "1") {
        console.log("Gostaria de ver seus itens à venda.\n");
        console.log("Thoren: Claro! Tenho poção de cura restaurará sua vida em 50 pontos. Custa 10 gil.");
        console.log("E um elixir de força aumentará seu ataque em 10 pontos. Custa 20 gil.");
        console.log("O que deseja?\n");

        escolha = prompt("1 - Poção, 2 - Elixir ou 3 - Sair.\n");

        do {
            if (escolha != '1' && escolha != '2' && escolha != '3') {
                console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
            }
        } while (escolha != '1' && escolha != '2' && escolha != '3')

        if (escolha == "1") {
            console.log("Vou levar uma poção de cura.");
            console.log("Thoren: Excelente escolha!\n");
        } else if (escolha == "2") {
            console.log("Vou levar um elixir de força.");
            console.log("Thoren: Excelente escolha!\n");
        } else {
            console.log("Na verdade, não preciso de nada agora.");
            console.log("Thoren: Sem problemas, herói. Se mudar de ideia, estarei aqui com os melhores itens das redondezas.");
        }

    } else if (escolha == '2') {
        console.log("Preciso melhorar minhas habilidades. Posso treinar aqui?");
        console.log("Thoren: Certamente! Tenho um campo de treinamento nos fundos. Vamos ver do que você é capaz!");
    } else {
        console.log("Vou continuar minha jornada. Até a próxima, Thoren.");
        console.log("Thoren: Boa sorte, herói. Que a fortuna sorria para você em seu caminho.\nVolte sempre que precisar!");
    }

    console.log("Após se equipar com os itens de Thoren, você parte para as Montanhas Sombrias.\nNo caminho, encontra um grupo de orcs bloqueando a passagem.");

    escolha = prompt("1 - Lutar contra os orcs, ou 2 - Encontrar uma rota alternativa?\n");

    do {
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2')

    if (escolha == "1") {
        console.log("Você enfrenta os orcs em uma batalha feroz. Embora saia vitorioso,\nvocê sofre alguns ferimentos.");
    } else {
        console.log("Você decide evitar o confronto direto e encontra uma passagem oculta\nque leva a um antigo templo.");
        console.log("Dentro do templo, você encontra o Cristal de Lumen. Porém, antes de pegá-lo, um enigma precisa ser resolvido.");
        console.log("Você se depara com duas portas grandes, com algo escrito nelas. Ao pousar suas mãos pelas portas, as marcaçõs ganham um leve brilho, e que traz uma surpresa adicional:");
        console.log("Um idioma que há muito você não tivera contato. A língua élfica.");
        console.log("Ao se recuperar do breve choque, você começa a decifrar as inscriçoes nas portas.");
        console.log("A-HA! A chave para o enígma.");
        console.log("DIGA, AMIGO, E ENTRE");        

        resposta = prompt("Qual é a resposta? Dica, --> Mellon <--").toUpperCase();

        if (resposta == "MELLON") {
            console.log("O enigma está resolvido e o Cristal de Lumen é seu.");
        } else {
            console.log("Infelizmente, a resposta está incorreta. Uma armadilha é acionada e voc\nperde parte de sua saúde.");
        }
    }

    console.log("Com o Cristal de Lumen em mãos, você retorna a Lumoria, pronto para o próximo desafio.");
}

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

function faseFinal() {
    console.log("Com as Três Grandes Relíquias em mãos, você se prepara para a batalha final contra Azrak, o Senhor\ndas Sombras. A batalha ocorre no Castelo das Sombras, um lugar repleto de perigos e armadilhas.");
    console.log("- Azrak: Finalmente, o herói aparece. Você realmente acredita que pode me deter? Eu, que fui forjado\nnas trevas e alimentado pelo ódio?");
    escolha = prompt("1 - Eu não estou sozinho... ou 2 - Você será derrotado...\n");

    do {
        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jóvem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2')

    if (escolha == "1") {
        console.log("Eu não estou sozinho. A luz de Aetherion está comigo.");
        console.log("- Azrak: Veremos quanto tempo sua luz durará em minhas trevas.");
    } else {
        console.log("Você será derrotado, assim como todos os outros antes de você.");
        console.log("- Azrak: Palavras ousadas para alguém que está prestes a cair diante do poder das sombras.");
    }

    console.log("\nA batalha final começa.\n");
    console.log("COMBATE");
    console.log("Em um momento de descuido de Valtor, você vê sua chance finalmente aparecer");
    console.log("Você coloca a Coroa de Aetherion sobre sua cabeça, e um poder ancestral flui através de você.\nA coroa concede sabedoria e força imensuráveis, permitindo que você contra-ataque Azrak com precisão\ne poder divinos.");
    console.log("Você utiliza o poder do Cristal de Lumen para enfraquecer Azrak. O cristal emite uma luz brilhante\nque dissipa as sombras, tornando Azrak vulnerável aos seus ataques.");
    console.log("Você brande a Lâmina de Valtor, desferindo golpes poderosos contra Azrak. A lâmina brilha intensamente,\nperfurando as defesas sombrias de Azrak.");

    console.log("Após uma intensa batalha, você finalmente derrota Azrak, destruindo suas forças sombrias e trazendo paz\na Aetherion. O reino celebra sua vitória e você é saudado como o maior herói de todos os tempos.");
    console.log();
}

module.exports = {
    introducao,
    epilogo,
    chegadaEmThaloria,
    dialogoLyria,
    fase1,
    fase2,
    fase3,
    faseFinal,
};
