# Desafio Técnico - Cálculo de Comissão de Vendedores

## Objetivo

Desenvolver um programa que leia um arquivo JSON contendo registros de vendas e calcule a comissão total de cada vendedor.

## Regras de Comissão

- Vendas abaixo de R$ 100,00: 0% de comissão
- Vendas entre R$ 100,00 e R$ 499,99: 1% de comissão
- Vendas a partir de R$ 500,00: 5% de comissão

## Tecnologias Utilizadas

- JavaScript (Node.js)

## Como executar

1. Clone o repositório

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta

```bash
cd desafio-01-comissoes
```

3. Execute o programa

```bash
node index.js
```

## Estrutura da Solução

O programa:

1. Lê os registros de vendas.
2. Calcula a comissão individual de cada venda.
3. Agrupa os resultados por vendedor.
4. Exibe o total vendido e o total de comissão.

## Exemplo de saída

```text
Vendedor: João Silva
Total Vendido: R$ 10754.70
Comissão Total: R$ 511.72
```