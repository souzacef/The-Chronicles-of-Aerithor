const { promisify } = require("util"); // Importa a função utilitária promisify

const delay = promisify(setTimeout); // Converte setTimeout para uma função que retorna uma Promise

// Função assíncrona para exibir o epílogo do jogo
async function epilogo(heroi) {
    
    // Aguarda 2 segundos antes de iniciar o epílogo
    await delay(2000);

    console.log("\n========================================================================================================");
    console.log("================================================ Epílogo ===============================================");
    console.log("========================================================================================================\n");

    // Aguarda 3 segundos antes de continuar
    await delay(3000);
    console.log(`Eldorion, o Sábio: Parabéns, ${heroi.nome}! Com a queda de Azrak, as Três Grandes Relíquias estão seguras,\ne a paz reina novamente em Aetherion. Você será eternamente lembrado como o Salvador de Aetherion.\n`);

    // Aguarda 2 segundos antes de continuar
    await delay(2000);
    console.log(`Lyria: Foi uma honra lutar ao seu lado, ${heroi.nome}. Sempre terá um lugar especial em Lumoria. Que a luz\nguie seus passos.\n`);

    // Aguarda 2 segundos antes de continuar
    await delay(2000);
    console.log(`Thoren: Volte sempre que precisar de bons negócios, ${heroi.nome}. Estou certo de que nossas jornadas se\ncruzarão novamente.\n`);

    // Aguarda 2 segundos antes de continuar
    await delay(2000);
    console.log(`Elara: Seu destino é grandioso, ${heroi.nome}. Que a magia de Aetherion esteja sempre ao seu lado.\n`);

    // Aguarda 2 segundos antes de continuar
    await delay(2000);
    console.log(`Com a vitória de ${heroi.nome}, a paz e a prosperidade retornam a Aetherion. As lendas de sua bravura ecoam\npor todas as terras, marcando o início de uma nova era de esperança e luz.\n`);

    // Aguarda 2 segundos antes de concluir
    await delay(2000);

    console.log("\n========================================================================================================");
    console.log("================================================ Fim! ==================================================");
    console.log("========================================================================================================\n");

    // Aguarda 4 segundos antes de finalizar
    await delay(4000);
}

// Exporta a função epilogo para uso em outras partes do jogo
module.exports = epilogo;
