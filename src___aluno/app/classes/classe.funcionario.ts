export class Funcionario {
    /* 
        nome ?: string;
        idade ?: number; 
    */

    /*  Por asserção ('!')
        nome !: string;
        idade !: number;
    */

    /*  Por Pipe ('|')
        nome: string | undefined;
        idade: number | undefined;
    */

    constructor(public nome: string, public idade: number) { }
}