import readlineSync = require('readline-sync');

const numeros: Set<number> = new Set<number>();

for (let i = 1; i <= 10; i++) {
  const numero = readlineSync.questionInt(`Digite o ${i} numero: `);
  numeros.add(numero); 
}

const numerosOrdenados = Array.from(numeros).sort((a, b) => a - b);

console.log("\nListar dados do Set:");
for (const n of numerosOrdenados) {
  console.log(n);
}
