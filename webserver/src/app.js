const util = require('util')
const express = require('express')
const db = require('./fakedb')
const { bolivator } = require('./bolivator')
const { ptBr } = require('./errorMap')

const bolivatorP = util.promisify(bolivator(ptBr))

const app = express()

app.get('/boleto/:barcode', (req, res) => {
  if (Object.keys(req.query).length > 0) {
    bolivatorP({
      barCode: req.params.barcode,
      dac10: Number(req.query.dac10),
      amount: req.query.amount,
      expirationDate: req.query.expirationDate,
      titulo: req.query.titulo,
      pagamento: req.query.pagamento
    })
      .then(message => res.status(200).end(message))
      .catch(err => res.status(403).end(err.message))
  } else {
    const boleto = db.find(el => el.barCode === req.params.barcode)
    if (!boleto) {
      res.status(404).end()
    } else {
      bolivatorP(boleto)
        .then(message => res.status(200).end(message))
        .catch(err => res.status(403).end(err.message))
    }
  }
})

app.listen(8080, () => {
  console.log('E-Wally')
})
