import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { HomeComponent } from './pages/home/home.component';
import { EstudoComponent } from './components/estudo/estudo.component';
import { LabelInputComponent } from './components/label-input/label-input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ButtonComponent } from './components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CadastrarClienteComponent } from './pages/cliente/cadastrar-cliente/cadastrar-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ContaComponent } from './pages/conta/conta.component';
import { CadastrarContaComponent } from './pages/conta/cadastrar-conta/cadastrar-conta.component';
import { CadastroEdicaoClienteComponent } from './pages/cliente/cadastro-edicao-cliente/cadastro-edicao-cliente.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExtratoComponent,
    DepositoComponent,
    SaqueComponent,
    HomeComponent,
    EstudoComponent,
    LabelInputComponent,
    CheckboxComponent,
    ButtonComponent,
    ClienteComponent,
    CadastrarClienteComponent,
    ContaComponent,
    CadastrarContaComponent,
    CadastroEdicaoClienteComponent,
    TransferenciaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
