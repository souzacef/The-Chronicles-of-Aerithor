const { promisify } = require("util");
const delay = promisify(setTimeout);


async function epilogo(heroi) {

    await delay(2000);

    console.log("\n========================================================================================================");
    console.log("================================================ Epílogo ===============================================");
    console.log("========================================================================================================\n");
    
    await delay(3000);

    console.log(`Eldorion, o Sábio: Parabéns, ${heroi.nome}! Com a queda de Azrak, as Três Grandes Relíquias estão seguras,\ne a paz reina novamente em Aetherion. Você será eternamente lembrado como o Salvador de Aetherion.\n`);
    
    await delay(2000);

    console.log(`Lyria: Foi uma honra lutar ao seu lado, ${heroi.nome}. Sempre terá um lugar especial em Lumoria. Que a luz\nguie seus passos.\n`);

    await delay(2000);

    console.log(`Thoren: Volte sempre que precisar de bons negócios, ${heroi.nome}. Estou certo de que nossas jornadas se\ncruzarão novamente.\n`);

    await delay(2000);

    console.log(`Elara: Seu destino é grandioso, ${heroi.nome}. Que a magia de Aetherion esteja sempre ao seu lado.\n`);

    await delay(2000);

    console.log(`Com a vitória de ${heroi.nome}, a paz e a prosperidade retornam a Aetherion. As lendas de sua bravura ecoam\npor todas as terras, marcando o início de uma nova era de esperança e luz.\n`);

    await delay(2000);

    console.log("\n========================================================================================================");
    console.log("================================================ Fim! ==================================================");
    console.log("========================================================================================================\n");

    await delay(4000);
}

module.exports = epilogo;