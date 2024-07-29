const prompt = require("./prompt/prompt");

const introducao = require("./function/introducao")
const criarHeroi = require("./function/criarHeroi");
const fase1 = require("./function/levels/fase1");
const fase2 = require("./function/levels/fase2");

function main() {
    //introducao();
    const heroi = criarHeroi();
    //console.log(`\nAssim, nosso herói ${heroi.nome} inicia sua aventura. Sua primeira parada: Aldeia de Thaloria.`);
    //fase1(heroi);
    fase2(heroi);
}

main();
