import { Component, OnInit } from '@angular/core';
import { Contato } from 'src/app/classes/contato';
import { ContatosService } from 'src/app/services/contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  constructor(private contatosService: ContatosService) { }

  ngOnInit(): void {
    // this.listaContatos = this.contatosService.getContatos();
    this.listar();
  }

  listar(): void {
    this.contatosService.getContatosWs().subscribe(res => this.listaContatos = res);
  }

  public listaContatos: Contato[] = [];

  //para um contato selecionado
  public contatoSelecionado!: Contato;
  public selecionar(item: Contato): void {
    this.contatoSelecionado = item;
  }

  //para um novo contato
  private novoContato!: Contato;
  public novo(): void {
    this.novoContato = { nome:'', email:'', celular:''}
    this.contatoSelecionado = this.novoContato;
  }

  public incluir(contato: Contato) : void {
    if(contato.nome ==='' || contato.email === '' || contato.celular === ''){
      alert('Dados inválidos');
      return;
    }
    if(this.listaContatos.find(c => c.nome === contato.nome)){
      alert('Este contato já existe!');
      return;
    }
    // this.listaContatos.push(contato);
    // alert('Contato incluído com sucesso!');
    this.contatosService.setContatoWs(contato)
      .subscribe(
        res => JSON.stringify(res), 
        error => alert(error),
        () => {
          this.listar();
          alert('Contato incluído com sucesso!');
        });
  }
}
