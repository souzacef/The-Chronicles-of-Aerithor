const prompt = require("./prompt/prompt");

const introducao = require("./function/introducao");
const criarHeroi = require("./function/criarHeroi");
const fase1 = require("./function/levels/fase1");
const fase2 = require("./function/levels/fase2");
const fase3 = require("./function/levels/fase3");
const faseFinal = require("./function/levels/faseFinal");
const epilogo = require("./function/epilogo");

async function main() {
    // Introdução à história
    await introducao();
    // Criação do herói principal
    const heroi = await criarHeroi();    
    // Início das fases do jogo
    await fase1(heroi);
    await fase2(heroi);
    await fase3(heroi);
    await faseFinal(heroi);
    // Epílogo após a conclusão da história
    await epilogo(heroi);
}

main();
