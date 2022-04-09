const { dac10 } = require('./dac')

// Attribute validators
const amountVal = amount => {
  const amountF = Number.parseFloat(amount)
  return !Number.isNaN(amountF) && amountF > 0
}
const dac10Val = dac => {
  const isInt = Number.isFinite(dac) && dac % 1 === 0
  return isInt && dac > 0 && dac < 11
}
const expiraVal = date => {
  const dateI = Date.parse(date)
  return !Number.isNaN(dateI) && dateI > Date.now()
}
const barCodeVal = barCode => {
  const onlyNumbers = /^\d+$/.test(barCode)
  const barCodeI = Number.parseInt(barCode)
  return onlyNumbers &&
    barCode.length === 11 &&
    !Number.isNaN(barCodeI) &&
    barCodeI > 0
}

const switxor = (a, b) => (!a && b) || (a && !b)

const bolivator = (boleto, cb) => {
  const titXpagBom = switxor(!!boleto.titulo, !!boleto.pagamento)
  const dac10Bom = dac10Val(boleto.dac10)
  const amountBom = amountVal(boleto.amount)
  const expiraBom = expiraVal(boleto.expirationDate)
  const barCodeBom = barCodeVal(boleto.barCode)

  const Dac10MatchBarCode = barCodeBom &&
    dac10Bom &&
    dac10(boleto.barCode) === boleto.dac10

  if (titXpagBom && dac10Bom && amountBom && expiraBom && barCodeBom && Dac10MatchBarCode) {
    const oque = boleto.titulo ? 'Título' : 'Pagamento'
    const de = boleto.amount
    const para = boleto.expirationDate
    const message = `${oque} de ${de} para ${para}`

    return cb(null, message)
  } else {
    return cb(new Error(JSON.stringify({
      titXpagBom,
      dac10Bom,
      amountBom,
      expiraBom,
      barCodeBom,
      Dac10MatchBarCode
    })))
  }
}

module.exports = {
  amountVal,
  dac10Val,
  expiraVal,
  barCodeVal,
  switxor,
  bolivator
}
