import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { DepositoComponent } from './pages/deposito/deposito.component';
import { ExtratoComponent } from './pages/extrato/extrato.component';
import { HomeComponent } from './pages/home/home.component';
import { SaqueComponent } from './pages/saque/saque.component';

const routes: Routes = [
  { path: '',component:HomeComponent, pathMatch: 'full' },
  { path: 'extrato', component:ExtratoComponent},
  { path: 'saque', component:SaqueComponent},
  { path: 'deposito', component:DepositoComponent},
  { path: 'cliente', component:ClienteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
