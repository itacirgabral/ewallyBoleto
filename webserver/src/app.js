const express = require('express')
const Bolivator = require('bolivator').default

const app = express()

app.get('/boleto/:linhaDigitavel', (req, res) => {
  const linhaDigitavel = req.params.linhaDigitavel
  try {
    const boleto = new Bolivator(linhaDigitavel)
    console.dir(boleto)
    res.status(300).end(':)')
  } catch (err) {
    console.error(err)
    res.status(400).end('bad parameter')
  }
})

app.listen(8080, () => {
  console.log('E-Wally')
})
