const { setTimeout } = require('timers/promises')
const test = require('tape')
const axios = require('axios')

/**
AAABCCCCCXDDDDDDDDDDYEEEEEEEEEEZKUUUUVVVVVVVVVV
21290001192110001210904475617405975870000002000
*/

test('# Espere a API levantar', async t => {
  let dePe = false
  while (!dePe) {
    await setTimeout(1000)
    await axios({
      method: 'get',
      url: 'http://localhost:8080/status'
    })
      .then(() => {
        dePe = true
      })
      .catch(() => {})
  }

  t.pass('Upa')
})

test('# Boleto OK', t => {
  t.plan(1)
  axios({
    method: 'get',
    url: 'http://localhost:8080/boleto/21290001192110001210904475617405975870000002000'
  })
    .then(response => {
      const { codigoBarras, valor, vencimento } = response.data
      if (codigoBarras === '21299758700000020000001121100012100447561740' &&
      valor === '20,00' &&
      vencimento === '16 de julho de 2018') {
        t.pass(JSON.stringify(response.data))
      } else {
        t.fail(JSON.stringify(response.data))
      }
    })
    .catch(() => t.fail())
})

test('# Boleto BAD em paralelo', t => {
  t.plan(5)

  axios({
    method: 'get',
    url: 'http://localhost:8080/boleto/21290001182110001210904475617405975870000002000'
  })
    .then(() => t.fail())
    .catch(err => {
      if (err.response.data === 'O primeiro campo possui algum erro') {
        t.pass(err.response.data)
      } else {
        t.fail(err.response.data)
      }
    })

  axios({
    method: 'get',
    url: 'http://localhost:8080/boleto/21290001192110001210804475617405975870000002000'
  })
    .then(() => t.fail())
    .catch(err => {
      if (err.response.data === 'O segundo campo possui algum erro') {
        t.pass(err.response.data)
      } else {
        t.fail(err.response.data)
      }
    })

  axios({
    method: 'get',
    url: 'http://localhost:8080/boleto/21290001192110001210904475617408975870000002000'
  })
    .then(() => t.fail())
    .catch(err => {
      if (err.response.data === 'O terceiro campo possui algum erro') {
        t.pass(err.response.data)
      } else {
        t.fail(err.response.data)
      }
    })

  axios({
    method: 'get',
    url: 'http://localhost:8080/boleto/21290001192110001210904475617405875870000002000'
  })
    .then(() => t.fail())
    .catch(err => {
      if (err.response.data === 'O código de barras possui algum erro') {
        t.pass(err.response.data)
      } else {
        t.fail(err.response.data)
      }
    })

  axios({
    method: 'get',
    url: 'http://localhost:8080/boleto/21290001182110001210804475617408875870000002000'
  })
    .then(() => t.fail())
    .catch(err => {
      if (err.response.data === 'O primeiro campo possui algum erro\nO segundo campo possui algum erro\nO terceiro campo possui algum erro\nO código de barras possui algum erro') {
        t.pass(err.response.data)
      } else {
        t.fail(err.response.data)
      }
    })
})

test('# Desliga API', t => {
  t.plan(1)
  axios({
    method: 'get',
    url: 'http://localhost:8080/close'
  })
    .then(() => t.pass())
    .catch(() => t.fail())
})
