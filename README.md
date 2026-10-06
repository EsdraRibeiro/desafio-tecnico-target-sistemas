# Desafio Técnico Target Sistemas

Este repositório contém a resolução dos três desafios propostos.

## 📋 Desafios

### Desafio 1 - Cálculo de Comissão de Vendedores

Cálculo de comissão por vendedor com base em regras de faixas de venda.

Regras:
- Vendas < R$ 100,00: 0% de comissão
- Vendas entre R$ 100,00 e R$ 499,99: 1% de comissão
- Vendas ≥ R$ 500,00: 5% de comissão

Resultado: total vendido e comissão por vendedor.

### Desafio 2 - Controle de Estoque

Sistema de movimentações de entrada e saída de produtos com rastreamento.

Funcionalidades:
- ✅ Entrada de estoque
- ✅ Saída de estoque
- ✅ Validação de saldo
- ✅ Identificador único por movimentação
- ✅ Retorno do saldo atualizado

### Desafio 3 - Cálculo de Juros por Atraso

Cálculo do valor atualizado de um título vencido com juros simples.

Regra:
- Multa diária de 2,5% sobre o valor original
- Juros incidem apenas após o vencimento

## 🛠️ Tecnologias

- JavaScript
- Node.js
- Git
- GitHub

## 🚀 Como executar

### Pré-requisitos

- Node.js instalado

### Execução

```bash
# Desafio 1 - Comissões
cd desafio-01-comissoes
node index.js

# Desafio 2 - Estoque
cd desafio-02-estoque
node index.js

# Desafio 3 - Juros
cd desafio-03-juros
node index.js
```

## 📁 Estrutura do projeto

```text
desafio-tecnico-target-sistemas/
├── README.md
├── desafio-01-comissoes/
│   ├── README.md
│   ├── index.js
│   └── vendas.json
├── desafio-02-estoque/
│   ├── README.md
│   ├── index.js
│   └── estoque.json
└── desafio-03-juros/
    ├── README.md
    └── index.js
```

## 💡 Decisões Técnicas

As soluções foram desenvolvidas em JavaScript (Node.js) pela simplicidade de execução e legibilidade.

Foram aplicadas as seguintes boas práticas:

- ✅ Separação dos desafios por módulos
- ✅ Documentação utilizando JSDoc
- ✅ Tratamento de exceções
- ✅ Funções com responsabilidade única
- ✅ Estrutura preparada para expansão
- ✅ Controle de versão através do Git

## 📊 Exemplo de Saída

### Desafio 1 - Comissões

```text
RELATÓRIO DE COMISSÕES

Vendedor: João Silva
Quantidade de vendas: 3
Total vendido: R$ 900.50
Total comissão: R$ 18.01
-----------------------------
```

### Desafio 2 - Estoque

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

### Desafio 3 - Juros

```text
{
  valorOriginal: 1000,
  diasAtraso: 78,
  percentualJurosDia: '2,5%',
  valorJuros: 1950,
  valorAtualizado: 2950
}
```

## 👨‍💻 Autor

Desenvolvido por: Esdra Ribeiro

## 📝 Licença

Este projeto é de código aberto e pode ser utilizado livremente.
