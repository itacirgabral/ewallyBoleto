# EWALLY
Queremos poder através da aplicação consultar linhas digitáveis de boleto de
título bancário e pagamento de concessionárias, verificando se a mesma é válida
ou não. Sendo válida e possuindo valor e/ou data de vencimento ter o retorno
desses dados

## Setup
A aplicação possui 8 pacotes, os primeiros que devem ser buildados são:
- linhaDigitavel
- totalismo
- tetrapak
- dac10
- dac11

Esta são as bibliotecas compartilhadas. Depois destas dependencias devem ser
buildadas as bibliotecas de validações:
- bolivator
- tituvator

Todos acima seguindo os seguites comandos em suas respectivas pastas:
```
yarn
yarn build
```

Por último, no diretório `webserver`, instale as dependências e execute a aplicação
```
yarn
yarn dev
```

## Testes
Aa bibliotecaa compartilhadas e de validação possui testes unitários e a
plicação possui testes de api.

Por exemplo, no diretório `bolivator`, após o setup, execute os testes:
```
yarn test
```

As biliotecas foram desenvlvidas utilizando TDD.

No diretório `webserver`, após o setup, execute os testes:
```
yarn test
```
Repare que um processo do webserver é levantado e finalizado, depende da porta
`8080` disponível e do yarn.