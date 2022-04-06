# Duvidas

- É para fazer apenas 1 rota de consulta? Não haverá o resto do CRUD?
- É para validar os boletos que já estão salvo na minha base de dados?

## Discussão
Significa que o sistema possui dados errados que estão salvos, normalmente
validação é feita na inserção para evitar este caso.

## Sugestão
- posso utilizar um mock do
[dynamodb](https://www.npmjs.com/package/aws-sdk-mock), caso seja interessante 
validar meus conhecimentos da aws
- durante o alinhamento comentaram de swagger, acredito que devam fazer uso de
[jsonschema](https://json-schema.org/understanding-json-schema/reference/regular_expressions.html). 