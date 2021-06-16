export class Salario {
    valor: number ;
    
    constructor(){
        this.valor = 0;
    }

    calcular(): number { // retorna o valor de um imposto
        return this.valor * 7.5 / 100;
    }
}