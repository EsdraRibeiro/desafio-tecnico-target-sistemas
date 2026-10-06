/**
 * Desafio 01 - Cálculo de comissão por vendedor
 * 
 * Regras:
 * - Valor < 100 => 0%
 * - Valor >= 100 e < 500 => 1%
 * - Valor >= 500 => 5%
 */

const dados = require("./vendas.json");

function calcularComissao(valor) {
  if (valor < 100) {
    return 0;
  }

  if (valor < 500) {
    return valor * 0.01;
  }

  return valor * 0.05;
}

function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

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

function main() {
  const resultado = calcularComissoesPorVendedor(dados.vendas);

  console.log("\nRELATÓRIO DE COMISSÕES\n");

  Object.entries(resultado).forEach(([vendedor, info]) => {
    console.log(`Vendedor: ${vendedor}`);
    console.log(`Quantidade de vendas: ${info.quantidadeVendas}`);
    console.log(`Total vendido: ${formatarMoeda(info.totalVendido)}`);
    console.log(`Total comissão: ${formatarMoeda(info.totalComissao)}`);
    console.log("-----------------------------");
  });
}

main();
