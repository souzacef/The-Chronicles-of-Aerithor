const prompt = require("../prompt/prompt");

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

module.exports = fase2;