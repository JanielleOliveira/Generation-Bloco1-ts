interface stackInterface<Type> {
    push(dataItem: Type): void;
    pop(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printStack(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
 }
 
 export class Stack<Type> implements stackInterface<Type> {
 
    private StackData: Array<Type> = [];
 
    constructor() { }
 
    isEmpty(): boolean { //Este retorna true se a pilha está vazia.
       let result = this.StackData.length <= 0;
       return result;
    }
 
    push(dataItem: Type): void { //Este método é usado para adicionar um elemento no topo da pilha.

       this.StackData.push(dataItem);
    }
 
    pop(): Type | undefined { //Este método é usado para remover um elemento no topo da pilha.
       if (this.isEmpty()) {
          console.log("A pilha está vazia");
          return;
       } else {
          var element = this.StackData.pop();
          return element;
       }
    }
 
    count(): number { //Esta propriedade é usada para retornar o tamanho da pilha.
       let len = this.StackData.length;
       return len;
    }
 
    printStack(): void { //Exibe na tela todos os elementos da pilha.
       for (let i = this.StackData.length - 1; i >= 0 ; i--) {
          console.log(this.StackData[i]);
       }
    }
    
    /** peek()Este método é usado para exibir, sem remover, o elemento no topo da Pilha, 
     * ou retorna nulo se a pilha estiver vazia.*/
    peek(): Type | undefined { 
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.StackData[this.StackData.length - 1];
          return element;
       }
    }
    /** contains(elemento) Este método é usado para verificar se a pilha contém o elemento fornecido ou não.
     * Retorna verdadeiro se a pilha contiver o elemento, caso contrário, falso. */
    contains(dataItem: Type): boolean {
       if (this.StackData.includes(dataItem)) {
          return true;
       } else {
          return false;
       }
    }
 
    clear(): void { //Este método é usado para remover todos os elementos da pilha.
       this.StackData.length = 0;
    }
 
 }