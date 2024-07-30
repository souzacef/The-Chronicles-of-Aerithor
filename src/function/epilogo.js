function epilogo(heroi) {
    console.log("\n========================================================================================================");
    console.log("================================================ Epílogo ===============================================");
    console.log("========================================================================================================\n");
    
    console.log(`Eldorion, o Sábio: Parabéns, ${heroi.nome}! Com a queda de Azrak, as Três Grandes Relíquias estão seguras,\ne a paz reina novamente em Aetherion. Você será eternamente lembrado como o Salvador de Aetherion.\n`);
    
    console.log(`Lyria: Foi uma honra lutar ao seu lado, ${heroi.nome}. Sempre terá um lugar especial em Lumoria. Que a luz\nguie seus passos.\n`);

    console.log(`Thoren: Volte sempre que precisar de bons negócios, ${heroi.nome}. Estou certo de que nossas jornadas se\ncruzarão novamente.\n`);

    console.log(`Elara: Seu destino é grandioso, ${heroi.nome}. Que a magia de Aetherion esteja sempre ao seu lado.\n`);

    console.log(`Com a vitória de ${heroi.nome}, a paz e a prosperidade retornam a Aetherion. As lendas de sua bravura ecoam\npor todas as terras, marcando o início de uma nova era de esperança e luz.\n`);

    console.log("\n========================================================================================================");
    console.log("================================================ Fim! ==================================================");
    console.log("========================================================================================================\n");
}

module.exports = epilogo;