export interface ProcessarTurnoInput {
  nomeAtacante: string;
  nomeDefensor: string;
  danoAtaque: number;
  defesaDefensor: number;
  GolpeCritico: boolean;
}

export class GerenciadorBatalha {
  processarTurno({
    nomeAtacante,
    nomeDefensor,
    danoAtaque,
    defesaDefensor,
    GolpeCritico,
  }: ProcessarTurnoInput): string {
    const ataqueFinal = GolpeCritico ? danoAtaque * 2 : danoAtaque;
    const danoAplicado = Math.max(0, ataqueFinal - defesaDefensor);
    const tipoAtaque = GolpeCritico ? 'CRÍTICO!' : 'Ataque Normal';

    return `[BATALHA] ${nomeAtacante} atacou ${nomeDefensor} (${tipoAtaque}) -> Dano: ${danoAplicado} HP`;
  }
}