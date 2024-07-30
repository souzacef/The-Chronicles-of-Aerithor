const { promisify } = require("util");


const delay = promisify(setTimeout);

async function introducao() {
    console.log("\n========================================================================================================");
    console.log("================================= Deixe seu terminal em tela cheia ;-) =================================");
    console.log("========================================================================================================\n");

    await delay(4000); 

    console.log("\n========================================================================================================");
    console.log("=======================================                          =======================================");
    console.log("======================================= As Crônicas de Aetherion =======================================");
    console.log("=======================================                          =======================================");
    console.log("========================================================================================================\n");
    
    await delay(3000);

    console.log("\nNas terras místicas de Aetherion, onde a magia e a tecnologia coexistem de maneira intrincada, há um\nequilíbrio delicado mantido pelas Três Grandes Relíquias: A Lâmina de Valtor, o Cristal de Lumen\ne a Coroa de Aetherion. Essas relíquias foram forjadas na Era dos Primordiais para proteger o mundo\ndas forças da escuridão.\n");

    await delay(2000);

    console.log("Por séculos, Aetherion prosperou em paz sob a proteção das relíquias. No entanto, um mal antigo, há\nmuito adormecido, despertou. Azrak, o Senhor das Sombras, um ser de pura maldade, deseja apoderar-se\ndas relíquias para mergulhar Aetherion na escuridão eterna.");

    await delay(2000);

    console.log("\nVocê, herói, foi escolhido pelo Conselho dos Sábios para embarcar em uma jornada épica para recuperar\nas relíquias antes que Azrak as encontre. Sua aventura começa na pacata aldeia de Thaloria.");

    await delay(2000);
}

module.exports = introducao;
