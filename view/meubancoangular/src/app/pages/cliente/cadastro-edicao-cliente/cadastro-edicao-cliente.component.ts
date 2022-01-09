import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastro-edicao-cliente',
  templateUrl: './cadastro-edicao-cliente.component.html',
  styleUrls: ['./cadastro-edicao-cliente.component.css']
})
export class CadastroEdicaoClienteComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    id: new FormControl(null),
    nome: new FormControl('',Validators.required),
    cpf: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    observacoes: new FormControl(''),
    ativo: new FormControl(true),
  })

  constructor(private clienteService: ClienteService, private router: Router) { }

  ngOnInit(): void {
  }

  enviar(){
    const cliente: ICliente = this.formGroup.value;
    this.clienteService.cadastrar(cliente).subscribe(clienteAPI=> {
      Swal.fire('Sucesso!','Cadastro com sucesso!','success');
      this.router.navigate([`/cliente`])
    }, error=> {
      console.error(error);
    })
  }
}
