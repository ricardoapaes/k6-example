# K6

Vamos usar o `https://k6.io/` e criar um script de exemplo.

Para rodar o script de exemplo usar o seguinte comando:

```shell
docker run --rm \
    -v ${PWD}:/k6/ \
    -w /k6/ \
    -e PROTOCOL=https
    -e HOST=crn1.com.br
    grafana/k6:latest \
    run index.js
```

OU

```shell
k6 run \
 -e PROTOCOL=https \
 -e HOST=crn1.com.br \
 index.js
```

## Duvidas

Acesse a documentação oficial no link: <https://k6.io/docs/>
