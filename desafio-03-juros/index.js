/**
 * Desafio 03 - Cálculo de Juros por Atraso
 *
 * Regra:
 * Aplicar multa de 2,5% ao dia sobre o valor original.
 */

/**
 * Calcula a quantidade de dias em atraso.
 *
 * @param {Date} dataVencimento
 * @returns {number}
 */
function calcularDiasAtraso(dataVencimento) {
  const hoje = new Date();

  const diferencaEmMilissegundos =
    hoje.getTime() - dataVencimento.getTime();

  const diasAtraso = Math.floor(
    diferencaEmMilissegundos /
      (1000 * 60 * 60 * 24)
  );

  return diasAtraso > 0
    ? diasAtraso
    : 0;
}

/**
 * Calcula os juros de um título vencido.
 *
 * @param {number} valorOriginal
 * @param {string} dataVencimento
 *
 * @returns {Object}
 */
function calcularJuros(
  valorOriginal,
  dataVencimento
) {
  const data = new Date(dataVencimento);

  const diasAtraso =
    calcularDiasAtraso(data);

  const taxaJurosDia = 0.025;

  const juros =
    valorOriginal *
    taxaJurosDia *
    diasAtraso;

  const valorFinal =
    valorOriginal + juros;

  return {
    valorOriginal,
    diasAtraso,
    percentualJurosDia: "2,5%",
    valorJuros: Number(
      juros.toFixed(2)
    ),
    valorAtualizado: Number(
      valorFinal.toFixed(2)
    )
  };
}

/**
 * Exemplo de utilização
 */
const resultado = calcularJuros(
  1000,
  "2026-07-20"
);

console.log(resultado);