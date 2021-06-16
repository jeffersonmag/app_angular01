import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FuncionarioService } from './services/service.funcionario';
import { FormsModule } from "@angular/forms";
import { ContatosComponent } from './components/contatos/contatos.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],  
  providers: [ FuncionarioService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
