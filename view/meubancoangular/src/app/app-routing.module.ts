import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroEdicaoClienteComponent } from './pages/cliente/cadastro-edicao-cliente/cadastro-edicao-cliente.component';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { CadastrarContaComponent } from './pages/conta/cadastrar-conta/cadastrar-conta.component';
import { ContaComponent } from './pages/conta/conta.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';
import { TransferenciaComponent } from './pages/transferencia/transferencia.component';

const routes: Routes = [
  { path: '',component:HomeComponent, pathMatch: 'full' },
  { path: 'extrato', component:ExtratoComponent},
  { path: 'saque', component:SaqueComponent},
  { path: 'deposito', component:DepositoComponent},
  { path: 'cliente', component:ClienteComponent},
  { path: 'cliente/cadastrar', component:CadastroEdicaoClienteComponent},
  { path: 'cliente/editar/:id', component:CadastroEdicaoClienteComponent},
  { path: 'conta', component:ContaComponent},
  { path: 'conta/cadastrar', component:CadastrarContaComponent},
  { path: 'transferencia', component:TransferenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
