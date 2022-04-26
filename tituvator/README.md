# VALIDADOR DE BOLETOS
A função deste pacote é disponibilizar uma biblioteca para validar e transcrever
linhas digitáveis de um título. Na exportação default está a classe principal
que deve ser instanciada da seguinte forma:
```typescript
const titulo = new Tituvator('858000000003312301172024204290336657605912000693')
```

O objeto possui os seguintes atributos:
- **barCode** `Array<number>` Codigo de Barras
- **dvaOK** `boolean` Digito Validador apresentado do primeiro campo coincide com o calculado
- **dvbOK** `boolean` Digito Validador apresentado do segundo campo coincide com o calculado
- **dvcOK** `boolean` Digito Validador apresentado do terceiro campo coincide com o calculado
- **dvdOK** `boolean` Digito Validador apresentado do quarto campo coincide com o calculado
- **barCodeOK** `boolean` Digito Validador apresentado do Codigo de Barras campo coincide com o calculado
- **amount** `number` Valor declarado do título