/**
 * Desafio Técnico
 * Cálculo de comissão por vendedor
 */

const dados = require("./vendas.json");

/**
 * Calcula a comissão de uma venda individual.
 *
 * Regras:
 * - Valor < 100 => 0%
 * - Valor >= 100 e < 500 => 1%
 * - Valor >= 500 => 5%
 *
 * @param {number} valor
 * @returns {number}
 */
function calcularComissao(valor) {
  if (valor < 100) {
    return 0;
  }

  if (valor < 500) {
    return valor * 0.01;
  }

  return valor * 0.05;
}

/**
 * Agrupa vendas e comissões por vendedor.
 *
 * @param {Array} vendas
 * @returns {Object}
 */
function calcularComissoesPorVendedor(vendas) {
  const resultado = {};

  vendas.forEach((venda) => {
    const { vendedor, valor } = venda;

    if (!resultado[vendedor]) {
      resultado[vendedor] = {
        totalVendido: 0,
        totalComissao: 0,
        quantidadeVendas: 0,
      };
    }

    resultado[vendedor].totalVendido += valor;
    resultado[vendedor].totalComissao += calcularComissao(valor);
    resultado[vendedor].quantidadeVendas += 1;
  });

  return resultado;
}

const resultado = calcularComissoesPorVendedor(dados.vendas);

console.log("\nRELATÓRIO DE COMISSÕES\n");

Object.entries(resultado).forEach(([vendedor, dados]) => {
  console.log(`Vendedor: ${vendedor}`);
  console.log(`Quantidade de vendas: ${dados.quantidadeVendas}`);
  console.log(`Total vendido: R$ ${dados.totalVendido.toFixed(2)}`);
  console.log(`Total comissão: R$ ${dados.totalComissao.toFixed(2)}`);
  console.log("-----------------------------");
});