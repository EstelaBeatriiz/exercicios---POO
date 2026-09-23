export interface CalcularTaxaInput {
  distanciaKm: number;
  valorPedido: number;
  estaChovendo: boolean;
}

export class CalculadoraDelivery {
  calcularEntrega({
    distanciaKm,
    valorPedido,
    estaChovendo,
  }: CalcularTaxaInput): string {
    let taxaFinal = 0;

    if (valorPedido < 150) {
      taxaFinal = distanciaKm * 3.0;
      if (estaChovendo) {
        taxaFinal += 5.0;
      }
    }

    const tempoMinutos = distanciaKm * 3 + (estaChovendo ? 15 : 0);

    return `[DELIVERY] Taxa: R$ ${taxaFinal.toFixed(2)} | Tempo Estimado: ${tempoMinutos} min`;
  }
}