const titulosOK = require('./titulosOK')
const pagamentosOK = require('./pagamentosOK')
const titulosNOK = require('./titulosNOK')
const pagamentosNOK = require('./pagamentosNOK')

module.exports = [
  ...titulosOK,
  ...pagamentosOK,
  ...titulosNOK,
  ...pagamentosNOK
]
