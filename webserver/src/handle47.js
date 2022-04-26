const Bolivator = require('bolivator').default

module.exports = ({ res, linhaDigitavel }) => {
  try {
    const boleto = new Bolivator(linhaDigitavel)

    const errorsMessages = []
    if (!boleto.dvxOK) {
      errorsMessages.push('O primeiro campo possui algum erro')
    }
    if (!boleto.dvyOK) {
      errorsMessages.push('O segundo campo possui algum erro')
    }
    if (!boleto.dvzOK) {
      errorsMessages.push('O terceiro campo possui algum erro')
    }
    if (!boleto.barCodeOK) {
      errorsMessages.push('O código de barras possui algum erro')
    }

    if (errorsMessages.length === 0) {
      const codigoBarras = boleto.barCode.join('')
      const vencimento = boleto.goodFor.toLocaleDateString('pt-BR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
      const valor = boleto.amount.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })

      res.status(200).json({
        codigoBarras,
        valor,
        vencimento
      })
    } else {
      res.status(400).end(errorsMessages.join('\n'))
    }
  } catch (err) {
    console.error(err)
    res.status(400).end('bad parameter')
  }
}
