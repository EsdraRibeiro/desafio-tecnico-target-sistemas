# Desafio 01 - Cálculo de Comissão de Vendedores

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p>

## Objetivo

Desenvolver um programa que leia um arquivo JSON contendo registros de vendas e calcule a comissão total de cada vendedor.

## Regras de Comissão

- Vendas abaixo de R$ 100,00: 0% de comissão
- Vendas entre R$ 100,00 e R$ 499,99: 1% de comissão
- Vendas a partir de R$ 500,00: 5% de comissão

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Como Executar

1. Acesse a pasta do desafio:

```bash
cd desafio-01-comissoes
```

2. Execute o programa:

```bash
node index.js
```

## Estrutura da Solução

O programa realiza as seguintes etapas:

1. Lê os dados de vendas do arquivo `vendas.json`
2. Calcula a comissão de cada venda individualmente
3. Agrupa os valores por vendedor
4. Exibe o total vendido e o total de comissão

## Exemplo de Saída

```text
RELATÓRIO DE COMISSÕES

Vendedor: João Silva
Quantidade de vendas: 3
Total vendido: R$ 900.50
Total comissão: R$ 18.01
-----------------------------
```

## Arquivos

- `index.js` - lógica principal do cálculo
- `vendas.json` - dados de entrada com as vendas por vendedor
