# EWALLY
Queremos poder através da aplicação consultar linhas digitáveis de boleto de
título bancário e pagamento de concessionárias, verificando se a mesma é válida
ou não. Sendo válida e possuindo valor e/ou data de vencimento ter o retorno
desses dados

## Setup
A aplicação possui 2 pacotes, uma contendo a biblioteca de validação para
boletos e outra contendo a api.

Clone o repositório:
```
git clone https://github.com/itacirgabral/ewallyBoleto
```

No diretório `bolivator` instale as dependências e compile o códig
```
yarn
yarn build
```

No diretório `webserver` instale as dependências e execute a aplicação
```
yarn
yarn dev
```

## Testes
A biblioteca de validação possui testes unitários e a plicação possui testes de
api.

No diretório `bolivator`, após o setup, execute os testes:
```
yarn test
```
A bilioteca foi desenvlvida utilizando TDD.

No diretório `webserver`, após o setup, execute os testes:
```
yarn test
```
Repare que um processo do webserver é levantado e finalizado, depende da porta
`8080` disponível e do yarn.