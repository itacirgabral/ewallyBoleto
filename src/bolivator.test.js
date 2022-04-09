const test = require('tape')
const {
  amountVal,
  barCodeVal,
  dac10Val,
  expiraVal,
  switxor,
  bolivator
} = require('./bolivator')

const titulosOK = require('./fakedb/titulosOK')
const pagamentosOK = require('./fakedb/pagamentosOK')
const titulosNOK = require('./fakedb/titulosNOK')
const pagamentosNOK = require('./fakedb/pagamentosNOK')

test('# amountVal', t => {
  t.true(amountVal('20.00'), "amountVal('20.00')")
  t.false(amountVal('aeiou'), "amountVal('aeiou')")
  t.false(amountVal('-12'), "amountVal('-12')")

  t.end()
})

test('# barCodeVal', t => {
  t.true(barCodeVal('12345678901'), "barCodeVal('12345678901')")
  t.false(barCodeVal('aeiou'), "barCodeVal('aeiou')")
  t.false(barCodeVal('-1234567890'), "barCodeVal('-1234567890')")
  t.false(barCodeVal('1234'), "barCodeVal('1234')")

  t.end()
})

test('# dac10Val', t => {
  t.true(dac10Val(1), 'dac10Val(1)')
  t.true(dac10Val(2), 'dac10Val(2)')
  t.true(dac10Val(7), 'dac10Val(7)')
  t.false(dac10Val(-8), 'dac10Val(-8)')
  t.false(dac10Val(0), 'dac10Val(0)')
  t.false(dac10Val(11), 'dac10Val(11)')
  t.false(dac10Val(1.2), 'dac10Val(1.2)')
  t.false(dac10Val('300'), "dac10Val('300')")
  t.end()
})

test('# expiraVal', t => {
  t.true(expiraVal('2024-07-16'), "expiraVal('2024-07-16')")
  t.false(expiraVal('talvez amanhã'), "expiraVal('talvez amanhã')")
  t.false(expiraVal('2010-07-16'), "expiraVal('2010-07-16')")

  t.end()
})

test('# switxor', t => {
  t.false(switxor(false, false), 'switxor(false, false)')
  t.true(switxor(false, true), 'switxor(false, true)')
  t.true(switxor(true, false), 'switxor(true, false)')
  t.false(switxor(true, true), 'switxor(true, true)')

  t.end()
})

test('# bolivator', t => {
  t.plan(titulosOK.length + pagamentosOK.length + titulosNOK.length + pagamentosNOK.length)

  titulosOK.forEach((boleto, idx) => bolivator(boleto, (err, message) => {
    if (err) {
      t.fail(`titulosOK ${idx}`)
    } else {
      t.pass(message)
    }
  }))

  pagamentosOK.forEach((boleto, idx) => bolivator(boleto, (err, message) => {
    if (err) {
      t.fail(`pagamentosOK ${idx}`)
    } else {
      t.pass(message)
    }
  }))

  titulosNOK.forEach((boleto, idx) => bolivator(boleto, (err, message) => {
    if (err) {
      t.pass(`titulosNOK ${idx}`)
    } else {
      t.fail(`titulosNOK ${idx}`)
    }
  }))

  pagamentosNOK.forEach((boleto, idx) => bolivator(boleto, (err, message) => {
    if (err) {
      t.pass(`pagamentosNOK ${idx}`)
    } else {
      t.fail(`pagamentosNOK ${idx}`)
    }
  }))
})
