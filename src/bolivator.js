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

// const tituloAtts = [
//   'barCode',
//   'dac10',
//   'amount',
//   'expirationDate',
//   'titulo'
// ]

module.exports = {
  amountVal,
  expiraVal,
  barCodeVal,
  isTitulo,
  isPagamento
}
