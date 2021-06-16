import { Injectable } from '@angular/core';
import { Contato } from '../classes/contato';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatosService {

  public getContatos() : Contato[] {
    return [
      { nome: 'Gerson', email: 'gerson@mail.com', celular: '99856-0077' },
      { nome: 'Arlindo', email: 'arlindo@mail.com', celular: '77854-8537' }
    ];
  }
  constructor(private http: HttpClient) { }

  url: string = 'http://localhost:3200/api/contatos';

  public getContatosWs() {
    return this.http.get<Contato[]>(this.url);
  }

  public setContatoWs(contato: Contato): Observable<Contato> {
    return this.http.post<Contato>(this.url, contato);
  }
}
