import readlineSync = require('readline-sync');

const inteiros: number[] = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

const numero = readlineSync.questionInt("Digite o numero que voce deseja encontrar: ");

let posicao = -1;

for (let i = 0; i < inteiros.length; i++) {
  if (inteiros[i] === numero) {
    posicao = i; 
    break;       
  }
}

if (posicao !== -1) {
  console.log(`O número ${numero} está localizado na posição: ${posicao}`);
} else {
  console.log(`O número ${numero} não foi encontrado!`);
}
