const express = require('express')
const handle47 = require('./handle47')
const handle48 = require('./handle48')

const app = express()

app.get('/boleto/:linhaDigitavel', (req, res) => {
  const linhaDigitavel = req.params.linhaDigitavel

  if (linhaDigitavel.length === 47) {
    handle47({ linhaDigitavel, res })
  } else if (linhaDigitavel.length === 48) {
    handle48({ linhaDigitavel, res })
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
