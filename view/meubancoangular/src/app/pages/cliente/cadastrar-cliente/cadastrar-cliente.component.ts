import { Component, OnInit } from '@angular/core';
import { cliente } from '../cliente';

@Component({
  selector: 'app-cadastrar-cliente',
  templateUrl: './cadastrar-cliente.component.html',
  styleUrls: ['./cadastrar-cliente.component.css']
})
export class CadastrarClienteComponent implements OnInit {
  cliente!: cliente
  constructor() { this.cliente = new cliente() }

  ngOnInit(): void {
  }

  onSubmit(): void {
    alert(`CADASTRO FEITO COM SUCESSO!\n------DADOS------\nNOME: ${this.cliente.name}\nEMAIL: ${this.cliente.email}\nCPF: ${this.cliente.cpf}\nOBSERVAÇÕES: ${this.cliente.observacoes}\nATIVO: ${this.cliente.ativo}`)
  }

}
