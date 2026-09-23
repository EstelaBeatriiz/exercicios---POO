export interface CalcularEmprestimoInput {
  tituloLivro: string;
  diasPadrao: number;
  ehEstudante: boolean;
  diasAtrasoAnterior: number;
}

export class GestorEmprestimos {
  calcularPrazoDevolucao({
    tituloLivro,
    diasPadrao,
    ehEstudante,
    diasAtrasoAnterior,
  }: CalcularEmprestimoInput): string {
    const diasTotais = diasPadrao + (ehEstudante ? 7 : 0);
    const valorMulta = diasAtrasoAnterior > 0 ? diasAtrasoAnterior * 2.0 : 0;

    return `[BIBLIOTECA] Livro: "${tituloLivro}" | Prazo Total: ${diasTotais} dias | Pendência Multa: R$ ${valorMulta.toFixed(
      2
    )}`;
  }
}