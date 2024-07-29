const prompt = require("../../prompt/prompt");
const Inimigo = require("../../models/Inimigo");
const batalha = require("../batalha");

function fase2(heroi) {

    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");

    console.log("De volta a Lumoria, você encontra Thoren, um mercador conhecido por seus itens raros e poderosos. Ele\noferece itens que podem ajudar em sua próxima missão: recuperar o Cristal de Lumen, escondido nas\nMontanhas Sombrias.\n");
    console.log("Thoren: Saudações, herói! Bem-vindo à minha loja. Sou Thoren, o mercador mais astuto destas terras. Como\nposso ajudá-lo hoje? Você pode comprar itens valiosos, treinar suas habilidades, ou simplesmente\nsair e continuar sua jornada\n");

    let escolha;

    while (true) {
        do {
            escolha = prompt("1 - Comprar itens, 2- Treinar ou 3 - Sair ");
            if (escolha != '1' && escolha != '2' && escolha != '3') {
                console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");
            }
        } while (escolha != '1' && escolha != '2' && escolha != '3');

        if (escolha == "1") {
            console.log("\nGostaria de ver seus itens à venda.\n");
            console.log(`Carteira: G$ ${heroi.gil}\n`);
            console.log("Thoren: Claro! Tenho poção de cura que restaurará sua vida em 50 pontos. Custa 10 gil.");
            console.log("E um elixir de força que aumentará seu ataque em 10 pontos. Custa 15 gil.");
            console.log("O que deseja?\n");        

            do {
                escolha = prompt("1 - Poção, 2 - Elixir ou 3 - Sair. ");

                if (escolha != '1' && escolha != '2' && escolha != '3') {
                    console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");
                }
            } while (escolha != '1' && escolha != '2' && escolha != '3');

            if (escolha == "1") {
                if (heroi.gil >= 10) {
                    console.log("Vou levar uma poção de cura.\n");
                    console.log("Thoren: Excelente escolha!");            
                    heroi.gastarGil(10);
                    heroi.bolsa.pocoes++;
                    console.log(`1 poção comprada. Quantidade na bolsa: ${heroi.bolsa.pocoes}`);
                } else {
                    console.log("Você não tem Gil suficiente para realizar essa compra.\n");                
                }
            } else if (escolha == "2") {
                if (heroi.gil >= 15) {
                    console.log("Vou levar um elixir de força.\n");
                    console.log("Thoren: Excelente escolha!");
                    heroi.gastarGil(15);
                    heroi.bolsa.elixires++;
                    console.log(`1 elixir comprado. Quantidade na bolsa: ${heroi.bolsa.elixires}`);
                } else {
                    console.log("Você não tem Gil suficiente para realizar essa compra.\n");                
                }
            } else {
                console.log("Na verdade, não preciso de nada agora.");
                console.log("Thoren: Sem problemas, herói. Se mudar de ideia, estarei aqui com os melhores itens das redondezas.\n");
            }

        } else if (escolha == '2') {
            console.log("\nPreciso melhorar minhas habilidades. Posso treinar aqui?");
            if (heroi.gil >= 20) {
                console.log("Thoren: Por 20 moedas? Certamente! Tenho um campo de treinamento nos fundos.");
                console.log("Vamos ver do que você é capaz!");
                heroi.gastarGil(20);
                heroi.levelUp();
                console.log("\nThoren exige muito de você, mas você consegue completar o treinamento.\n");
            } else {
                console.log("Poderia, se você tivesse 20 moedas. Mas como você já gastou tudo...\n");            
            }

        } else {
            console.log("\nVou continuar minha jornada. Até a próxima, Thoren.\n");
            console.log("Thoren: Boa sorte, herói. Que a fortuna sorria para você em seu caminho.\nVolte sempre que precisar!\n");
            break;
        }
    }

    console.log("Após se equipar com os itens de Thoren, você parte para as Montanhas Sombrias. No caminho, encontra um\ngrupo de orcs bloqueando a passagem.\n");   

    do {
        escolha = prompt("1 - Lutar contra os orcs, ou 2 - Encontrar uma rota alternativa? ");

        if (escolha != '1' && escolha != '2') {
            console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2');

    if (escolha == "1") {
        const generalOrc = new Inimigo("General Orc", 50, 10, 7);
        batalha(heroi, generalOrc);
        console.log("\nVocê enfrenta os orcs em uma batalha feroz. Embora saia vitorioso,\nvocê sofre alguns ferimentos.");
    } else {
        console.log("========================================================================================================\n");
        console.log("\nVocê decide evitar o confronto direto e encontra uma passagem oculta que leva a um antigo templo.");
        console.log("Dentro do templo, você encontra o Cristal de Lumen. Porém, antes de pegá-lo, um enigma precisa ser\nresolvido.");
        console.log("\nVocê se depara com duas portas grandes, com algo escrito nelas. Ao pousar suas mãos pelas portas, as\nmarcações ganham um leve brilho, e que traz uma surpresa adicional:");
        console.log("Um idioma que há muito você não tivera contato. A língua élfica.\n");
        console.log("Ao se recuperar do breve choque, você começa a decifrar as inscrições nas portas.");
        console.log("A-HA! A chave para o enigma!");
        console.log("\nDIGA, AMIGO, E ENTRE.\n");        

        let resposta = prompt("Qual é a resposta? Dica, --> Mellon <-- ").toUpperCase();

        if (resposta == "MELLON") {
            console.log("O enigma está resolvido e o Cristal de Lumen é seu.");
        } else {
            console.log("Infelizmente, a resposta está incorreta. Uma armadilha é acionada e você\nperde parte de sua saúde.");
            heroi.receberDano(10);
        }
    }

    console.log("\nCom o Cristal de Lumen em mãos, você retorna a Lumoria, pronto para o próximo desafio.");
}

module.exports = fase2;
