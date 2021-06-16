import { Funcionario } from '../classes/classe.funcionario';
import { Injectable } from '@angular/core';

@Injectable()
export class FuncionarioService {
    listaFuncionarios() : Funcionario[] {
        return [
            { nome: 'Pedro', idade: 23 },
            { nome: 'Marina', idade: 25 },
            { nome: 'Lucélia', idade: 42 },
        ];
    }
}