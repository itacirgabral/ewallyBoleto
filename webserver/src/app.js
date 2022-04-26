const express = require('express')
const Bolivator = require('bolivator').default
const Tituvator = require('tituvator').default

const app = express()

app.get('/boleto/:linhaDigitavel', (req, res) => {
  const linhaDigitavel = req.params.linhaDigitavel

  if (linhaDigitavel.length === 47) {
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
        const codigoBarras = boleto.barCode.map(String).join('')
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
  } else if (linhaDigitavel.length === 48) {
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
        const codigoBarras = titulo.barCode.map(String).join('')
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
  } else {
    res.status(400).end('bad parameter')
  }
})

app.get('/status', (_req, res) => {
  res.status(200).end()
})

app.get('/close', (_req, res) => {
  res.status(200).end()
  process.exit()
})

app.listen(8080, () => {
  console.log('E-Wally')
})
