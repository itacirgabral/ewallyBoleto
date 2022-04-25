const express = require('express')
const Bolivator = require('bolivator').default

const app = express()

app.get('/boleto/:linhaDigitavel', (req, res) => {
  const linhaDigitavel = req.params.linhaDigitavel
  try {
    const boleto = new Bolivator(linhaDigitavel)

    const errorsMessages = []
    if (boleto.dvxOK) {
      errorsMessages.push('O primeiro campo possui algum erro')
    }
    if (boleto.dvyOK) {
      errorsMessages.push('O segundo campo possui algum erro')
    }
    if (boleto.dvzOK) {
      errorsMessages.push('O terceiro campo possui algum erro')
    }
    if (boleto.barCodeOK) {
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
      res.status(300).end(errorsMessages.join('\n'))
    }
  } catch (err) {
    /* Quando a linha digitavel não possui apenas numeros ou quando o tamanho
     * dela é diferente significa que a requisição foi feita não utilizando o
     * nosso frontend.
     *
     * Por outro lado, erros no conteúdo da linha digitável podem acontecer por
     * descuido do usuario mas no uso adequado da interface.
     */
    console.error(err)
    res.status(400).end('bad parameter')
  }
})

app.listen(8080, () => {
  console.log('E-Wally')
})
