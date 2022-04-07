// const { dac10 } = require('./dac')

const amountVal = amount => {
  const amountF = Number.parseFloat(amount)
  return !Number.isNaN(amountF) && amountF > 0
}

const expiraVal = date => {
  const dateI = Date.parse(date)
  return !Number.isNaN(dateI) && dateI > Date.now()
}

const barCodeVal = barCode => {
  const barCodeI = Number.parseInt(barCode)
  return barCode.length === 11 &&
    !Number.isNaN(barCodeI) &&
    barCodeI > 0
}

const isTitulo = el => el.titulo
const isPagamento = el => el.pagamento

const bolAtts = [
  'barCode',
  'dac10',
  'amount',
  'expirationDate'
]

const bolivator = (boleto, cb) => {
  const bolkeys = Object.keys(boleto)
  const attAttOk = bolkeys.length === bolAtts.length + 1 && bolkeys.every(el => bolAtts.includes(el))

  // cb(new Error('nem nem'))
}

module.exports = {
  amountVal,
  expiraVal,
  barCodeVal,
  isTitulo,
  isPagamento,
  bolivator
}
