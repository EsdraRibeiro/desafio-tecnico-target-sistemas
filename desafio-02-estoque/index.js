/**
 * Desafio 02 - Controle de Estoque
 *
 * Objetivo:
 * Registrar movimentações de entrada e saída de produtos,
 * validar o saldo disponível e retornar o resultado final.
 */

const fs = require("fs");
const path = require("path");

const caminhoArquivo = path.join(__dirname, "estoque.json");
const dados = JSON.parse(fs.readFileSync(caminhoArquivo, "utf8"));

function gerarIdMovimentacao() {
  return Date.now();
}

function buscarProduto(codigoProduto) {
  const produto = dados.estoque.find(
    (item) => item.codigoProduto === codigoProduto
  );

  if (!produto) {
    throw new Error(`Produto ${codigoProduto} não encontrado.`);
  }

  return produto;
}

function salvarEstoque() {
  fs.writeFileSync(caminhoArquivo, JSON.stringify(dados, null, 2), "utf8");
}

function movimentarEstoque(
  codigoProduto,
  tipoMovimentacao,
  quantidade,
  descricaoMovimentacao
) {
  const produto = buscarProduto(codigoProduto);
  const estoqueAnterior = produto.estoque;

  const tipo = tipoMovimentacao.toLowerCase();

  if (quantidade <= 0) {
    throw new Error("A quantidade deve ser maior que zero.");
  }

  switch (tipo) {
    case "entrada":
      produto.estoque += quantidade;
      break;

    case "saida":
      if (quantidade > produto.estoque) {
        throw new Error("Quantidade solicitada superior ao estoque disponível.");
      }
      produto.estoque -= quantidade;
      break;

    default:
      throw new Error("Tipo de movimentação inválido. Use 'entrada' ou 'saida'.");
  }

  const movimentacao = {
    idMovimentacao: gerarIdMovimentacao(),
    dataMovimentacao: new Date().toISOString(),
    descricaoMovimentacao,
    produto: produto.descricaoProduto,
    tipoMovimentacao: tipo,
    quantidadeMovimentada: quantidade,
    estoqueAnterior,
    estoqueFinal: produto.estoque,
  };

  salvarEstoque();

  return movimentacao;
}

function main() {
  try {
    const resultado = movimentarEstoque(
      101,
      "saida",
      20,
      "Venda realizada para cliente"
    );

    console.log(JSON.stringify(resultado, null, 2));
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
  }
}

main();
