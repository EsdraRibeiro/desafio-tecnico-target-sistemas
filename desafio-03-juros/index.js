/**
 * Desafio 03 - Cálculo de juros por atraso
 *
 * Regra:
 * Aplicar multa de 2,5% ao dia sobre o valor original.
 */

function calcularDiasAtraso(dataVencimento) {
  const hoje = new Date();
  const vencimento = new Date(dataVencimento);

  if (Number.isNaN(vencimento.getTime())) {
    throw new Error("Data de vencimento inválida.");
  }

  const diferencaEmMilissegundos = hoje.getTime() - vencimento.getTime();

  if (diferencaEmMilissegundos <= 0) {
    return 0;
  }

  return Math.floor(diferencaEmMilissegundos / (1000 * 60 * 60 * 24));
}

function formatarMoeda(valor) {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}

function calcularJuros(valorOriginal, dataVencimento) {
  if (valorOriginal <= 0) {
    throw new Error("O valor original deve ser maior que zero.");
  }

  const diasAtraso = calcularDiasAtraso(dataVencimento);
  const taxaJurosDia = 0.025;

  const juros = valorOriginal * taxaJurosDia * diasAtraso;
  const valorAtualizado = valorOriginal + juros;

  return {
    valorOriginal: Number(valorOriginal.toFixed(2)),
    diasAtraso,
    percentualJurosDia: "2,5%",
    valorJuros: Number(juros.toFixed(2)),
    valorAtualizado: Number(valorAtualizado.toFixed(2)),
    valorOriginalFormatado: formatarMoeda(valorOriginal),
    valorJurosFormatado: formatarMoeda(juros),
    valorAtualizadoFormatado: formatarMoeda(valorAtualizado),
  };
}

function main() {
  try {
    const resultado = calcularJuros(1000, "2026-07-20");
    console.log(JSON.stringify(resultado, null, 2));
  } catch (erro) {
    console.error(`Erro: ${erro.message}`);
  }
}

main();
