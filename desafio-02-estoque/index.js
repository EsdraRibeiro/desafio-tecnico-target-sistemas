/**
 * Desafio 02 - Controle de Estoque
 *
 * Objetivo:
 * Realizar movimentações de entrada e saída de produtos,
 * gerando um identificador único para cada movimentação e
 * retornando o saldo final do estoque.
 */

const dados = require("./estoque.json");

/**
 * Gera um identificador único para a movimentação.
 *
 * @returns {number}
 */
function gerarIdMovimentacao() {
  return Date.now();
}

/**
 * Localiza um produto através do código.
 *
 * @param {number} codigoProduto
 * @returns {Object}
 * @throws {Error}
 */
function buscarProduto(codigoProduto) {
  const produto = dados.estoque.find(
    produto => produto.codigoProduto === codigoProduto
  );

  if (!produto) {
    throw new Error(
      `Produto ${codigoProduto} não encontrado.`
    );
  }

  return produto;
}

/**
 * Executa uma movimentação de estoque.
 *
 * Tipos permitidos:
 * - entrada
 * - saida
 *
 * @param {number} codigoProduto
 * @param {string} tipoMovimentacao
 * @param {number} quantidade
 * @param {string} descricaoMovimentacao
 *
 * @returns {Object}
 */
function movimentarEstoque(
  codigoProduto,
  tipoMovimentacao,
  quantidade,
  descricaoMovimentacao
) {
  const produto = buscarProduto(codigoProduto);

  const estoqueAnterior = produto.estoque;

  switch (tipoMovimentacao.toLowerCase()) {
    case "entrada":
      produto.estoque += quantidade;
      break;

    case "saida":
      if (quantidade > produto.estoque) {
        throw new Error(
          "Quantidade solicitada superior ao estoque disponível."
        );
      }

      produto.estoque -= quantidade;
      break;

    default:
      throw new Error(
        "Tipo de movimentação inválido."
      );
  }

  return {
    idMovimentacao: gerarIdMovimentacao(),
    dataMovimentacao: new Date(),
    descricaoMovimentacao,
    produto: produto.descricaoProduto,
    tipoMovimentacao,
    quantidadeMovimentada: quantidade,
    estoqueAnterior,
    estoqueFinal: produto.estoque
  };
}

/**
 * Exemplo de utilização
 */
try {
  const resultado = movimentarEstoque(
    101,
    "saida",
    20,
    "Venda realizada para cliente"
  );

  console.log(resultado);
} catch (erro) {
  console.error(erro.message);
}