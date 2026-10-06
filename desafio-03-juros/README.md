# Desafio 03 - Cálculo de Juros por Atraso

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p>

## Objetivo

Calcular o valor atualizado de um título vencido, considerando a multa por atraso.

## Regra de Negócio

- Multa diária de 2,5%
- Juros simples
- Incidência apenas após o vencimento

## Parâmetros Utilizados

- Valor original
- Data de vencimento

## Retorno Esperado

- Dias em atraso
- Valor dos juros
- Valor atualizado

## Fórmula Aplicada

```text
juros = valorOriginal * 0.025 * diasAtraso
valorAtualizado = valorOriginal + juros
```

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Como Executar

1. Acesse a pasta do desafio:

```bash
cd desafio-03-juros
```

2. Execute o programa:

```bash
node index.js
```

## Estrutura da Solução

O programa realiza as seguintes etapas:

1. Recebe o valor original e a data de vencimento
2. Calcula os dias em atraso
3. Aplica a multa de 2,5% ao dia
4. Retorna os valores de juros e valor atualizado

## Exemplo de Saída

```text
{
  valorOriginal: 1000,
  diasAtraso: 78,
  percentualJurosDia: '2,5%',
  valorJuros: 1950,
  valorAtualizado: 2950
}
```

## Arquivos

- `index.js` - lógica principal para cálculo do juros por atraso
