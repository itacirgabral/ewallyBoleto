const test = require('tape')
const axios = require('axios')

test('# pagamento OK', t => {
  t.plan(1)

  const barCode = '40810812143'
  const dac10 = 10
  const amount = '40.00'
  const expirationDate = '2024-07-16'
  const pagamento = true

  axios({
    method: 'get',
    url: `http://localhost:8080/boleto/${
      barCode
    }?dac10=${
      dac10
    }&amount=${
      amount
    }&expirationDate=${
      expirationDate
    }&pagamento=${
      pagamento
    }`
  })
    .then(() => t.pass())
    .catch(() => t.fail())
})

test('# titulo fail', t => {
  t.plan(1)

  const barCode = '39779320133'
  const dac10 = 6
  const expirationDate = '2024-07-16'
  const titulo = true

  axios({
    method: 'get',
    url: `http://localhost:8080/boleto/${
      barCode
    }?dac10=${
      dac10
    }&expirationDate=${
      expirationDate
    }&titulo=${
      titulo
    }`
  })
    .then(() => t.fail())
    .catch(() => t.pass())
})
