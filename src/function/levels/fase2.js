const prompt = require("../../prompt/prompt");
const Inimigo = require("../../models/Inimigo");
const batalha = require("../batalha");
const { promisify } = require("util");

const delay = promisify(setTimeout);

async function fase2(heroi) {

    console.log("\n========================================================================================================");
    console.log("============================================ Vila de Lumoria ==========================================="); 
    console.log("========================================================================================================\n");

    await delay(3000);

    console.log("De volta a Lumoria, você encontra Thoren, um mercador conhecido por seus itens raros e poderosos. Ele\noferece itens que podem ajudar em sua próxima missão: recuperar o Cristal de Lumen, escondido nas\nMontanhas Sombrias.\n");

    await delay(2000);

    console.log("Thoren: Saudações, herói! Bem-vindo à minha loja. Sou Thoren, o mercador mais astuto destas terras. Como\nposso ajudá-lo hoje? Você pode comprar itens valiosos, treinar suas habilidades, ou simplesmente sair e\ncontinuar sua jornada.\n");

    await delay(1000);

    let escolha;

    while (true) {
        do {
            escolha = prompt("1 - Comprar itens, 2- Treinar ou 3 - Sair ");
            if (escolha != '1' && escolha != '2' && escolha != '3') {

                await delay(500);

                console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");

                await delay(500);
            }
        } while (escolha != '1' && escolha != '2' && escolha != '3');

        if (escolha == "1") {

            await delay(500);

            console.log("\nGostaria de ver seus itens à venda.\n");

            await delay(200);

            console.log(`Carteira: G$ ${heroi.gil}\n`);

            await delay(500);

            console.log("Thoren: Claro! Tenho poção de cura que restaurará sua vida em 50 pontos. Custa 10 gil.");

            await delay(200);

            console.log("E um elixir de força que aumentará seu ataque em 10 pontos. Custa 15 gil.");

            await delay(200);

            console.log("O que deseja?\n");
            
            await delay(500);

            do {
                escolha = prompt("1 - Poção, 2 - Elixir ou 3 - Sair. ");

                if (escolha != '1' && escolha != '2' && escolha != '3') {

                    await delay(500);

                    console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");
                }
            } while (escolha != '1' && escolha != '2' && escolha != '3');

            if (escolha == "1") {
                if (heroi.gil >= 10) {

                    await delay(500);

                    console.log("Vou levar uma poção de cura.\n");

                    await delay(500);

                    console.log("Thoren: Excelente escolha!");            
                    heroi.gastarGil(10);
                    heroi.bolsa.pocoes++;

                    await delay(200);

                    console.log(`1 poção comprada. Quantidade na bolsa: ${heroi.bolsa.pocoes}\n`);
                } else {

                    await delay(500);

                    console.log("Você não tem Gil suficiente para realizar essa compra.\n");                
                }
            } else if (escolha == "2") {
                if (heroi.gil >= 15) {

                    await delay(500);

                    console.log("Vou levar um elixir de força.\n");

                    await delay(500);

                    console.log("Thoren: Excelente escolha!");
                    heroi.gastarGil(15);
                    heroi.bolsa.elixires++;

                    await delay(200);

                    console.log(`1 elixir comprado. Quantidade na bolsa: ${heroi.bolsa.elixires}\n`);
                    
                } else {

                    await delay(500);

                    console.log("Você não tem Gil suficiente para realizar essa compra.\n");                
                }
            } else {

                await delay(500);

                console.log("Na verdade, não preciso de nada agora.");

                await delay(500);

                console.log("Thoren: Sem problemas, herói. Se mudar de ideia, estarei aqui com os melhores itens das redondezas.\n");
            }

        } else if (escolha == '2') {

            await delay(500);

            console.log("\nPreciso melhorar minhas habilidades. Posso treinar aqui?");
            if (heroi.gil >= 20) {

                await delay(500);

                console.log("Thoren: Por 20 moedas? Certamente! Tenho um campo de treinamento nos fundos.");

                await delay(200);

                console.log("Vamos ver do que você é capaz!");
                heroi.gastarGil(20);
                heroi.levelUp();

                await delay(2000);

                console.log("\nThoren exige muito de você, mas você consegue completar o treinamento.\n");
            } else {

                await delay(500);

                console.log("Poderia, se você tivesse 20 moedas. Mas como você já gastou tudo...\n");            
            }

        } else {

            await delay(500);

            console.log("\nVou continuar minha jornada. Até a próxima, Thoren.\n");

            await delay(500);
            
            console.log("Thoren: Boa sorte, herói. Que a fortuna sorria para você em seu caminho. Volte sempre que precisar!\n");
            break;
        }
    }

    await delay(1000);

    console.log("Após se equipar com os itens de Thoren, você parte para as Montanhas Sombrias. No caminho, encontra um\ngrupo de orcs bloqueando a passagem.\n");
    
    await delay(1000);

    do {
        escolha = prompt("1 - Lutar contra os orcs, ou 2 - Encontrar uma rota alternativa? ");

        if (escolha != '1' && escolha != '2') {

            await delay(500);

            console.log("\nOpção inválida, jovem gafanhoto. Tente novamente.\n");
        } 
    } while(escolha != '1' && escolha != '2');

    if (escolha == "1") {

        await delay(500);

        const drak = new Inimigo("Drak", 50, 10, 7);
        await batalha(heroi, drak);

        await delay(1000);

        console.log("\nVocê enfrenta os orcs em uma batalha feroz. Embora saia vitorioso,você sofre alguns ferimentos.");

        await delay(500);

    } else {
        
        console.log("\nVocê decide evitar o confronto direto e encontra uma passagem oculta que leva a um antigo templo.");

        await delay(1000);

        console.log("Dentro do templo, você encontra o Cristal de Lumen. Porém, antes de pegá-lo, um enigma precisa ser\nresolvido.");

        await delay(1000);

        console.log("\nVocê se depara com duas portas grandes, com algo escrito nelas. Ao pousar suas mãos pelas portas, as\nmarcações ganham um leve brilho, e que traz uma surpresa adicional: Um idioma que há muito você não\ntivera contato. A língua élfica.\n");

        await delay(1000);

        console.log("Ao se recuperar do breve choque, você começa a decifrar as inscrições nas portas.");

        await delay(1000);

        console.log("\nA-HA! A chave para o enigma!\n");

        await delay(1000);

        console.log("\nDIGA, AMIGO, E ENTRE.\n\n");        

        await delay(3000);

        let resposta = prompt("Qual é a resposta? Dica, --> Mellon <-- ").toUpperCase();

        if (resposta == "MELLON") {

            await delay(500);

            console.log("\nO enigma está resolvido e o Cristal de Lumen é seu.");
        } else {

            await delay(500);

            console.log("\nInfelizmente, a resposta está incorreta. Uma armadilha é acionada e você perde parte de sua saúde.\n");

            await delay(200);

            heroi.receberDano(10);
        }
    }


    await delay(1000);

    console.log("\nCom o Cristal de Lumen em mãos, você retorna a Lumoria, pronto para o próximo desafio.\n");
}

module.exports = fase2;
