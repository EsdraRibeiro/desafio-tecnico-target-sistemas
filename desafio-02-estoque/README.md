# Desafio 02 - Controle de Estoque

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
</p>

## Objetivo

Permitir movimentações de entrada e saída de produtos em estoque, mantendo o controle do saldo atualizado e registrando cada operação.

## Regras de Negócio

Cada movimentação deve conter:

- Identificador único
- Tipo da movimentação
- Descrição da operação
- Quantidade movimentada
- Estoque anterior
- Estoque final

## Funcionalidades

- ✅ Entrada de estoque
- ✅ Saída de estoque
- ✅ Validação de saldo disponível
- ✅ Identificador único para cada movimentação
- ✅ Retorno do saldo atualizado

## Tecnologias Utilizadas

- JavaScript
- Node.js

## Como Executar

1. Acesse a pasta do desafio:

```bash
cd desafio-02-estoque
```

2. Execute o programa:

```bash
node index.js
```

## Estrutura da Solução

O programa realiza as seguintes etapas:

1. Busca o produto pela chave `codigoProduto`
2. Valida o tipo da movimentação
3. Atualiza o saldo do produto
4. Gera um identificador único para a operação
5. Retorna o resultado da movimentação

## Exemplo de Saída

```text
{
  idMovimentacao: 1728227487000,
  dataMovimentacao: 2026-10-06T13:12:00.000Z,
  descricaoMovimentacao: 'Venda realizada para cliente',
  produto: 'Caneta Azul',
  tipoMovimentacao: 'saida',
  quantidadeMovimentada: 20,
  estoqueAnterior: 150,
  estoqueFinal: 130
}
```

## Arquivos

- `index.js` - lógica de movimentação do estoque
- `estoque.json` - base de dados com os produtos e seus saldos
