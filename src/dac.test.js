const test = require('tape')
const { fator21, somatisse, dac10 } = require('./dac')

test('# fator21', t => {
  t.equal(fator21(0), 2, 'O primeiro fator deve ser 2')
  t.equal(fator21(1), 1, 'O segundo fator deve ser 1')
  t.equal(fator21(2), 2, 'O terceiro fator deve ser 2')
  t.equal(fator21(3), 1, 'O quarto fator deve ser 1')

  t.end()
})

test('# somatisse', t => {
  t.equal(somatisse('00000000000'), 0, 'somatisse 00000000000')
  t.equal(somatisse('01000000000'), 1, 'somatisse 01000000000')
  t.equal(somatisse('00200000000'), 4, 'somatisse 00200000000')
  t.equal(somatisse('00030000000'), 3, 'somatisse 00030000000')
  t.equal(somatisse('01230000000'), 8, 'somatisse 01230000000')

  t.equal(somatisse('00000000006'), 3, 'somatisse 00000000006')
  t.equal(somatisse('00000000090'), 9, 'somatisse 00000000090')
  t.equal(somatisse('00000000800'), 7, 'somatisse 00000000800')
  t.equal(somatisse('00000007000'), 7, 'somatisse 00000007000')
  t.equal(somatisse('00000007896'), 26, 'somatisse 00000007896')

  t.equal(somatisse('01230067896'), 37, 'somatisse 01230067896')
  t.end()
})

test('# dac10', t => {
  const sequencia = '01230067896'
  t.equal(dac10(sequencia), 3, `O código verificador de ${sequencia} deve ser 3`)

  t.end()
})
