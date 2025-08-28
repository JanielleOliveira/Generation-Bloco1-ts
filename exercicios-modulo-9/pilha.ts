/* Atividade 02 – Pilha

Escreva um programa contendo uma Collection Stack (Pilha) de Objetos string, para organizar a retirada de livros de uma pilha.
O programa deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
2: Listar todos os livros da Pilha
3: Retirar um livro da pilha 
0: O programa deve ser finalizado. 
Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar que a pilha está vazia.
 */

import { Stack } from "../stack";
import rs = require("readline-sync");

const pilha = new Stack<string>();

let continuar: boolean = true;
let opcao: number

do {

    console.log("\nMenu:");
    console.log("******************************************");
    console.log(" ");
    console.log("  1 - Adicionar Livro na pilha");
    console.log("  2 - Listar todos os Livros");
    console.log("  3 - Retirar Livro da pilha");
    console.log("  0 - Sair");
    console.log(" ");
    console.log("******************************************");
    console.log("Entre com a opção desejada:");

    opcao = rs.questionInt();
    

    switch (opcao) {

        case 1:
            let livro: string = rs.question("Digite o nome do livro: ");
            pilha.push(livro);
            console.log("------------------------------------------");
            console.log("Pilha: " + livro + "\nLivro adicionado!");

            break;
        case 2:
            console.log("------------------------------------------");
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia!");

            } else {
                console.log("Lista de livros na pilha: ");
                pilha.printStack();
            }

            break;
        case 3:
            console.log("------------------------------------------");
            if (pilha.isEmpty()) {
                console.log("A pilha está vazia, não há livros para retirar!");

            } else {
                pilha.pop();
                console.log("Pilha:");
                pilha.printStack();
                console.log("Um livro foi retirado da pilha!");
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
