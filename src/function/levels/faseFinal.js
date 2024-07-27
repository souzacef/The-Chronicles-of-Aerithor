const prompt = require("../prompt/prompt");

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

module.exports = faseFinal;