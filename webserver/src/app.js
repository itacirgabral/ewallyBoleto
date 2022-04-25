const express = require('express')
const Bolivator = require('bolivator').default

const app = express()

app.get('/boleto/:linhaDigitavel', (req, res) => {
  const linhaDigitavel = req.params.linhaDigitavel
  try {
    const boleto = new Bolivator(linhaDigitavel)
    if (boleto.dvxOK && boleto.dvyOK && boleto.dvzOK && boleto.barCodeOK) {
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
      res.status(300).end('algo nao ta certo')
    }
  } catch (err) {
    console.error(err)
    res.status(400).end('bad parameter')
  }
})

app.listen(8080, () => {
  console.log('E-Wally')
})
