const prompt = require("./prompt/prompt");

const Heroi = require("./models/Heroi");
const Inimigo = require("./models/Inimigo");

const { introducao, epilogo, chegadaEmThaloria, dialogoLyria, fase1 } = require("./function/dialogos");
const criarHeroi = require("./function/criarHeroi");

introducao();
const heroi = criarHeroi();
console.log(`\nAssim, nosso herói ${heroi.nome} inicia sua aventura. Sua primeira parada: Aldeia de Thaloria\n`);


