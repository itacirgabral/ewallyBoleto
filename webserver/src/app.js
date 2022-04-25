const express = require('express')

const app = express()

app.get('/boleto/:linhaDigitavel', (req, res) => {
  const linhaDigitavel = req.params.linhaDigitavel
  res.status(200).end(linhaDigitavel)
})

app.listen(8080, () => {
  console.log('E-Wally')
})
