const { dac10 } = require('./dac')

const sequencia = String(Math.random()).slice(7)
// sequencia.length = 11

console.log(`sequencia=${sequencia} dac10=${dac10(sequencia)}`)
