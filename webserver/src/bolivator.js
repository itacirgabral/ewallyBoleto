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

// logic helper
const switxor = (a, b) => (!a && b) || (a && !b)

const bolivator = errorMap => (boleto, cb) => {
  // Objeto contendo a validação de todos os atributos
  const validations = { }

  validations.titXpagBom = switxor(!!boleto.titulo, !!boleto.pagamento)
  validations.dac10Bom = dac10Val(boleto.dac10)
  validations.amountBom = amountVal(boleto.amount)
  validations.expiraBom = expiraVal(boleto.expirationDate)
  validations.barCodeBom = barCodeVal(boleto.barCode)

  const barDacOK = validations.barCodeBom && validations.dac10Bom
  validations.dacMatch = barDacOK && dac10(boleto.barCode) === boleto.dac10

  // se todas as validações forem true
  if (Object.values(validations).every(e => e)) {
    const oque = boleto.titulo ? 'Título' : 'Pagamento'
    const de = boleto.amount
    const para = boleto.expirationDate
    const message = `${oque} de ${de} para ${para}`

    return cb(null, message)
  } else {
    const errosTranslated = Object
      .entries(validations)
      .flatMap(([erroName, isOk]) => isOk ? [] : errorMap[erroName])

    return cb(new Error(errosTranslated.join('\n')))
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
