# Passos para execução:

## Requisitos:

- Docker
- Java 11
- Node v15+
- Npm 7.7+

## No terminal:

Run `mkdir desafio-robdig`
Run `cd desafio-robdig`

clonar o projeto https://github.com/robdig7x/desafio-bb.git

- Executar na raiz do projeto:

Run `docker-compose up --build -d`

Navegar até `http://localhost:4200/`

Frontend [Angular v9]: `http://localhost:4200/`
Backend [Quarkus v2.9]: `http://localhost:8080/v1/indicator/${CODIGO_PAIS}`
Swagger: `http://localhost:8080/q/swagger-ui`