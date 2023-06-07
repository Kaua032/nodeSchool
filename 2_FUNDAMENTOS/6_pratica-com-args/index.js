
const minimist = require('minimist')
//externo



const args = minimist(process.argv.slice(2))
//interno

const soma = require('./soma').soma

const a = parseInt(args['a'])
const b = parseInt(args['b'])

console.log(args)
console.log(a, b)
console.log(soma(a, b))

