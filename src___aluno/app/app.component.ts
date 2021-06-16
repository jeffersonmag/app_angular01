import { Component, OnInit } from '@angular/core';
import { FuncionarioService } from './services/service.funcionario';
import { Funcionario } from './classes/classe.funcionario';
import { Salario } from './classes/classe.salario';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: '<app-contatos><app-contatos>',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.listar();
  }

  constructor(private funcionarioService: FuncionarioService) {}

  // exemplo 04 - Binding Bidirecional
  salario : Salario = new Salario();
  imposto : number = 0;

  efetuarCalculo(): void {
    this.imposto = this.salario.calcular();
  }

  // exemplo 03 - listas com filtro
  filtrar (event: string): void {
    this.listar();
    this.funcionarios = this.funcionarios
    .filter( p => p.nome.toLowerCase().includes(event.toLowerCase())); 
  }


  // exemplo 02 - gerando uma lista de funcionários -> view
  funcionarios: Funcionario[] = [];

  listar() {
    this.funcionarios = this.funcionarioService.listaFuncionarios();
  }

  nomeFuncionario: string = '';
  mostrar(nome: string): void {
    this.nomeFuncionario = nome;
  }


  // exemplo 01 - binding unidirecional (componente -> view)
  rnd: number = Math.random();
}
