const meuModulo = require('./meu_modulo')
const myModule = require('./myModule')

const soma = meuModulo.soma
const sub = meuModulo.sub
const multi = myModule.multi
const div = myModule.div

console.log(`${soma(5, 6)} ${sub(5, 6)} ${multi(5, 6)} ${div(5, 6)}`)