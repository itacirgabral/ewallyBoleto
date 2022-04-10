# EWALLY
Queremos poder através da aplicação consultar linhas digitáveis de boleto de título bancário 
e pagamento de concessionárias, verificando se a mesma é válida ou não. Sendo válida e 
possuindo valor e/ou data de vencimento ter o retorno desses dados

## setup
```
git clone https://github.com/itacirgabral/ewallyBoleto
cd ewallyBoleto
yarn
```

## test
```
yarn test
```

## play
```
yarn start
```

Títulos OK
- http://localhost:8080/boleto/42282556374
- http://localhost:8080/boleto/39412278829
- http://localhost:8080/boleto/47157330195

Pagamentos OK
- http://localhost:8080/boleto/23812064595
- http://localhost:8080/boleto/08961455222
- http://localhost:8080/boleto/40810812143

Títulos Not OK
- http://localhost:8080/boleto/39779320133
- http://localhost:8080/boleto/72489004353
- http://localhost:8080/boleto/61702585084

Pagamentos Not OK
- http://localhost:8080/boleto/012XXXX7896
- http://localhost:8080/boleto/01230000000
- http://localhost:8080/boleto/06959236233

# Mais boletos
Insira novos boletos em `./src/fakedb/seusBoletos.js` (não interfere nos testes)

## utils
- Para usar live reload `yarn dev`
- Para gerar novo código de barras e seu respectivo dac10 `yarn gendac`