import { GerenciadorBatalha } from './utils/batalha.js';
import { CalculadoraDelivery } from './utils/delivery.js';
import { ProcessadorPix } from './utils/banco.js';
import { GestorEmprestimos } from './utils/biblioteca.js';
import { GestorEstoque } from './utils/estoque.js';

console.log('=== QUESTÕES 1 A 5 ===\n');

// Questão 1
const batalha = new GerenciadorBatalha();
console.log(
  batalha.processarTurno({
    nomeAtacante: 'Guerreiro',
    nomeDefensor: 'Orc',
    danoAtaque: 25,
    defesaDefensor: 10,
    GolpeCritico: true,
  })
);

// Questão 2
const delivery = new CalculadoraDelivery();
console.log(
  delivery.calcularEntrega({
    distanciaKm: 8,
    valorPedido: 80,
    estaChovendo: true,
  })
);

// Questão 3
const pix = new ProcessadorPix();
console.log(
  pix.processarCobranca({
    nomeEmpresa: 'TechStore',
    valorTransacao: 1000,
    tipoChave: 'CNPJ',
    ehClientePremium: true,
  })
);

// Questão 4
const biblioteca = new GestorEmprestimos();
console.log(
  biblioteca.calcularPrazoDevolucao({
    tituloLivro: 'Anne Frank',
    diasPadrao: 14,
    ehEstudante: true,
    diasAtrasoAnterior: 3,
  })
);

// Questão 5
const estoque = new GestorEstoque();
console.log(
  estoque.avaliarNecessidadeReposicao({
    nomeProduto: 'Teclado Mecânico',
    quantidadeAtual: 4,
    estoqueMinimo: 10,
    tamanhoLote: 5,
  })
);