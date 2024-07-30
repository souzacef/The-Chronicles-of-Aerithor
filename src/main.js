const prompt = require("./prompt/prompt");

const introducao = require("./function/introducao");
const criarHeroi = require("./function/criarHeroi");
const fase1 = require("./function/levels/fase1");
const fase2 = require("./function/levels/fase2");
const fase3 = require("./function/levels/fase3");
const faseFinal = require("./function/levels/faseFinal");
const epilogo = require("./function/epilogo");

async function main() {
    //await introducao();
    const heroi = await criarHeroi();    
    await fase1(heroi);
    //await fase2(heroi);
    //await fase3(heroi);
    //await faseFinal(heroi);
    //await epilogo(heroi);
}

main();
