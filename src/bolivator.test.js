const test = require('tape')
const {
  amountVal,
  barCodeVal,
  expiraVal,
  isTitulo,
  isPagamento
} = require('./bolivator')

test('# amountVal', t => {
  t.true(amountVal('20.00'))
  t.false(amountVal('aeiou'))
  t.false(amountVal('-12'))

  t.end()
})

test('# barCodeVal', t => {
  t.true(barCodeVal('12345678901'))
  t.false(barCodeVal('aeiou'))
  t.false(barCodeVal('-1234567890'))
  t.false(barCodeVal('1234'))

  t.end()
})

test('# expiraVal', t => {
  t.true(expiraVal('2024-07-16'))
  t.false(expiraVal('talvez amanhã'))
  t.false(expiraVal('2010-07-16'))

  t.end()
})

test('# isTitulo', t => {
  t.true(isTitulo({
    titulo: true
  }))
  t.false(isTitulo({
    pagamento: true
  }))
  t.false(isTitulo({}))
  t.end()
})

test('# isTitulo', t => {
  t.true(isPagamento({
    pagamento: true
  }))
  t.false(isPagamento({
    titulo: true
  }))
  t.false(isPagamento({}))
  t.end()
})
