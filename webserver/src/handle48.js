const Tituvator = require('tituvator').default

module.exports = ({ res, linhaDigitavel }) => {
  try {
    const titulo = new Tituvator(linhaDigitavel)
    const errorsMessages = []

    if (!titulo.dvaOK) {
      errorsMessages.push('O primeiro campo possui algum erro')
    }
    if (!titulo.dvbOK) {
      errorsMessages.push('O segundo campo possui algum erro')
    }
    if (!titulo.dvcOK) {
      errorsMessages.push('O terceiro campo possui algum erro')
    }
    if (!titulo.dvcOK) {
      errorsMessages.push('O terceiro campo possui algum erro')
    }
    if (!titulo.barCodeOK) {
      errorsMessages.push('O código de barras possui algum erro')
    }

    if (errorsMessages.length === 0) {
      const codigoBarras = titulo.barCode.join('')
      const valor = titulo.amount.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })

      res.status(200).json({
        codigoBarras,
        valor
      })
    } else {
      res.status(400).end(errorsMessages.join('\n'))
    }
  } catch (err) {
    console.error(err)
    res.status(400).end('bad parameter')
  }
}
