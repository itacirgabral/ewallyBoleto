# VALIDADOR DE BOLETOS
A função deste pacote é disponibilizar uma biblioteca para validar e transcrever
linhas digitáveis de um boleto. Na exportação default está a classe principal
que deve ser instanciada da seguinte forma:
```typescript
const boleto = new Bolivator('21290001192110001210904475617405975870X00002000')
```

O objeto possui os seguintes atributos:
- **barCode** `Array<number>` Codigo de Barras
- **dvxOK** `boolean` Digito Validador apresentado do primeiro campo coincide com o calculado
- **dvyOK** `boolean` Digito Validador apresentado do segundo campo coincide com o calculado
- **dvzOK** `boolean` Digito Validador apresentado do terceiro campo coincide com o calculado
- **barCodeOK** `boolean` Digito Validador apresentado do Codigo de Barras campo coincide com o calculado
- **goodFor** `Date` Data de vencimento
- **amount** `number` Valor total do boleto

## Mapeamento linha editável para codigo de barras
```
linha editavel
AAABC.CCCCX DDDDD.DDDDDY EEEEE.EEEEEZ K UUUUVVVVVVVVVV
aaaai.iiiiX ooooo.oooooY uuuuu.uuuuuZ K eeeeeeeeeeeeee
01234.56789 01234.567890 12345.678901 2 34567890123456
```

```javascript
const iiiii = linhaEditavel.slice(4, 9)
```

- **A** - Codigo do banco
- **B** - Codigo moeda
- **X** - DV do Campo 1
- **Y** - DV do campo 2
- **Z** - DV do campo 3
- **K** - DV do código de barras
- **U** - Data vencimento
- **V** - Valor

```
Código de Barras
aaaaKeeeeeeeeeeeeeeiiiiioooooooooouuuuuuuuuu
```