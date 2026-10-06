# Desafio Técnico Target Sistemas

<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
</p>

Este repositório reúne a solução dos três desafios propostos pela Target Sistemas, desenvolvidos em JavaScript com Node.js.

## Visão Geral

O projeto foi organizado em módulos separados para facilitar a leitura, manutenção e execução dos desafios:

- Desafio 1: Cálculo de comissão por vendedor
- Desafio 2: Controle de movimentações de estoque
- Desafio 3: Cálculo de juros por atraso

## 📌 Desafios

### 1. Cálculo de Comissão de Vendedores

Desenvolver um programa que leia um arquivo JSON com registros de vendas e calcule a comissão total por vendedor.

Regras aplicadas:
- Vendas abaixo de R$ 100,00: 0% de comissão
- Vendas entre R$ 100,00 e R$ 499,99: 1% de comissão
- Vendas a partir de R$ 500,00: 5% de comissão

### 2. Controle de Estoque

Realizar movimentações de entrada e saída de produtos, com:
- identificador único da movimentação
- controle de saldo
- validação de estoque disponível
- histórico de movimentação

### 3. Cálculo de Juros por Atraso

Calcular o valor atualizado de um título vencido considerando:
- multa diária de 2,5%
- juros simples
- incidência somente após o vencimento

## 🛠️ Tecnologias Utilizadas

- JavaScript
- Node.js
- Git
- GitHub

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado na máquina

### Execução por desafio

```bash
# Desafio 1
cd desafio-01-comissoes
node index.js

# Desafio 2
cd desafio-02-estoque
node index.js

# Desafio 3
cd desafio-03-juros
node index.js
```

## 📁 Estrutura do Projeto

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

Foram aplicadas boas práticas como:
- separação dos desafios por módulos
- documentação com JSDoc
- tratamento de exceções
- funções com responsabilidade única
- estrutura organizada para expansão
- controle de versão com Git

## 📊 Exemplos de Saída

### Desafio 1

```text
RELATÓRIO DE COMISSÕES

Vendedor: João Silva
Quantidade de vendas: 3
Total vendido: R$ 900.50
Total comissão: R$ 18.01
-----------------------------
```

### Desafio 2

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

### Desafio 3

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

Este projeto é de código aberto e pode ser utilizado livremente para estudo e desenvolvimento.

## 🔗 Repositório

https://github.com/EsdraRibeiro/desafio-tecnico-target-sistemas
