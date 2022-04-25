# API DE VALIDAÇÂO PARA BOLETOS
A função deste pacote é disponibilizar serviços de validação e leitura de linhas
digitáveis, que foram implementadas por bibliotecas em pacotes separados. Por
exemplo o seguinte [link](
http://localhost:8080/boleto/21290001192110001210904475617405975870000002000)
deve retornar:
```JSON
{
    "codigoBarras": "21299758700000020000001121100012100447561740",
    "valor": "20,00",
    "vencimento": "16 de julho de 2018"
}
```

Além da rota especificada acima, existe `/status` e `/close` para facilitar os
testes com a api.

Quando a linha digitavel não possui apenas numeros ou quando o tamanho dela é
diferente da especificada significa que a requisição foi feita não utilizando o
nosso frontend sistema e retorna apenas `bad parameter`.

Por outro lado, erros no conteúdo da linha digitável podem acontecer por
descuido do usuario mas no uso adequado da interface, neste caso não é
apresentado o valor nem o vencimento e podem retornar uma ou mais destas
mensagens:
- O primeiro campo possui algum erro
- O segundo campo possui algum erro
- O terceiro campo possui algum erro
- O código de barras possui algum erro