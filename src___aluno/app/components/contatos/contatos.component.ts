import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/classes/classe.contato';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  listaContatos: Contato[] = [];
  contato = new Contato();
  erro: String | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  inserirContato(){
    if (this.contato.nome == '' ||
        this.contato.email == '' ||
        this.contato.celular == ''){
          this.erro = 'Existem valores vazios';
        }
    else {
      this.erro = undefined;

      let c: Contato = new Contato();
      c.nome = this.contato.nome;
      c.email = this.contato.email;
      c.celular = this.contato.celular;
      this.listaContatos.push(c);
    }
  }

  limparContato(){
    this.erro = undefined;
    let c: Contato = new Contato();
    c.nome = '';
    c.email = '';
    c.celular = '';
    this.contato.nome = c.nome;
    this.contato.email = c.email;
    this.contato.celular = c.celular;    
  }

  exibir(valor: any){
    this.contato = valor;
  }

}
