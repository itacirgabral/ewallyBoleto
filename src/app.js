const express = require('express')
const { db } = require('./fakedb')

const app = express()

app.get('/boleto/:barcode', (req, res) => {
  res.json(db.find(el => el.barCode === req.params.barcode))
})

app.listen(8080, () => {
  console.log('E-Wally')
})
