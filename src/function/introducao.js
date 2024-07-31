const { promisify } = require("util"); // Importa a função utilitária promisify

const delay = promisify(setTimeout); // Converte setTimeout para uma função que retorna uma Promise

// Função assíncrona para exibir a introdução do jogo
async function introducao() {
    console.log("\n========================================================================================================");
    console.log("================================= Deixe seu terminal em tela cheia ;-) =================================");
    console.log("========================================================================================================\n");

    // Aguarda 4 segundos antes de continuar
    await delay(4000);

    console.log("\n========================================================================================================");
    console.log("=======================================                          =======================================");
    console.log("======================================= As Crônicas de Aetherion =======================================");
    console.log("=======================================                          =======================================");
    console.log("========================================================================================================\n");

    // Aguarda 3 segundos antes de continuar
    await delay(3000);
    console.log("\nNas terras místicas de Aetherion, onde a magia e a tecnologia coexistem de maneira intrincada, há um\nequilíbrio delicado mantido pelas Três Grandes Relíquias: A Lâmina de Valtor, o Cristal de Lumen\ne a Coroa de Aetherion. Essas relíquias foram forjadas na Era dos Primordiais para proteger o mundo\ndas forças da escuridão.\n");

    // Aguarda 2 segundos antes de continuar
    await delay(2000);
    console.log("Por séculos, Aetherion prosperou em paz sob a proteção das relíquias. No entanto, um mal antigo, há\nmuito adormecido, despertou. Azrak, o Senhor das Sombras, um ser de pura maldade, deseja apoderar-se\ndas relíquias para mergulhar Aetherion na escuridão eterna.");

    // Aguarda 2 segundos antes de continuar
    await delay(2000);
    console.log("\nVocê, herói, foi escolhido pelo Conselho dos Sábios para embarcar em uma jornada épica para recuperar\nas relíquias antes que Azrak as encontre. Sua aventura começa na pacata aldeia de Thaloria.");

    // Aguarda 2 segundos antes de finalizar a introdução
    await delay(2000);
}

// Exporta a função introducao para uso em outras partes do jogo
module.exports = introducao;
