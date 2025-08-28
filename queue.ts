interface queueInterface<Type> {
   enqueue(dataItem: Type): void;
   dequeue(): Type | undefined;
   isEmpty(): boolean;
   count(): number;
   printQueue(): void;
   peek(): Type | undefined;
   contains(dataItem: Type): boolean;
   clear(): void;
}

export class Queue<Type> implements queueInterface<Type> {

   private QueueData: Array<Type> = [];

   constructor() { }

   isEmpty(): boolean { //Este retorna true se a fila está vazia.
      let result = this.QueueData.length <= 0;
      return result;
   }

   enqueue(dataItem: Type): void { //Este método é usado para adicionar um elemento no final da fila.
      this.QueueData.push(dataItem);
   }

   dequeue(): Type | undefined { //Este método é usado para remover o primeiro elemento da fila.
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData.shift();
         return element;
      }
   }

   count(): number { //Este método é usado para retornar o número de elementos da fila.
      let len = this.QueueData.length;
      return len;
   }

   printQueue(): void { //Exibe na tela todos os elementos da fila.
      for (let i = 0; i < this.QueueData.length; i++) {
         console.log(this.QueueData[i]);
      }
   }

   /* peek() Este método é usado para exibir, mas não remover, o elemento que está sendo apontado pelo
    ponteiro HEAD desta fila (o primeiro elemento), ou retornar nulo se esta fila estiver vazia. */
   peek(): Type | undefined {
      if (this.isEmpty()) {
         console.log("A fila está vazia");
         return;
      } else {
         var element = this.QueueData[0];
         return element;
      }
   }
   /**contains(elemento) Este método é usado para verificar se a fila contém o elemento fornecido ou não. 
    * Retorna true se a fila contiver o elemento. */
   contains(dataItem: Type): boolean {
      if (this.QueueData.includes(dataItem)) {
         return true;
      } else {
         return false;
      }
   }

   clear(): void { //Este método é usado para remover todos os elementos da fila.
      this.QueueData.length = 0;
   }

}