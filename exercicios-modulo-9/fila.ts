/*Atividade 01 – Fila

Escreva um programa contendo uma Collection Queue (Fila) de Objetos do tipo string,
 para organizar uma fila por ordem de chegada dos Clientes de um Banco.
 O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:

1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
2: Listar todos os Clientes na fila
3: Chamar (retirar) uma pessoa da fila 
0: O programa deve ser finalizado. 
Caso a fila esteja vazia, o programa deverá informar que a fila está vazia ao tentar retirar (chamar) um cliente da fila.
 */

import { Queue } from "../queue";
import rs = require('readline-sync');


const fila = new Queue<string>();

let continuar: boolean = true;
let opcao: number;

do {

    console.log("\nMenu:");
    console.log("******************************************");
    console.log(" ");
    console.log("  1 - Adicionar Cliente na Fila");
    console.log("  2 - Listar todos os Clientes");
    console.log("  3 - Retirar Cliente da Fila");
    console.log("  0 - Sair");
    console.log(" ");
    console.log("******************************************");
    console.log("Entre com a opção desejada:");

    opcao = rs.questionInt();

    switch (opcao) {

        case 1:
            let nome: string = rs.question("Digite o nome da pessoa: ");
            fila.enqueue(nome);
            console.log("------------------------------------------");
            console.log("\nfila:\n" + nome + "\n\nCliente Adicionado! ");

            break;
        case 2:
            if (fila.isEmpty()) {
                console.log("A fila esta vazia!");

            } else {
                console.log("Pessoas atualmente na fila: ");
                console.log("------------------------------------------");
                fila.printQueue();
            }

            break;
        case 3:
            if (fila.isEmpty()) {
                console.log("A fila está vazia, não há clientes para atender!");
            } else {
                console.log(fila.dequeue());
                console.log("\nfila:\n");
                fila.printQueue();
                console.log("\nO Cliente foi Chamado!")
            }

            break;
        case 0:
            console.log("Programa Finalizado!");
            continuar = false;
            break;
        default:
            console.log("Opcao invalida, verifique o menu!");
            break;

    }

} while (continuar);


