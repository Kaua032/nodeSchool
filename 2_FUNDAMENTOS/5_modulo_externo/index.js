// node .\index.js --nome=carlos --idade=31
const minimist = require('minimist')

const args = minimist(process.argv.slice(2))

const nome = args.nome
const idade = args.idade

console.log(`O nome é ${nome} e a idade é ${idade}`)