import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IConta } from 'src/app/interfaces/conta';
import { ICliente } from 'src/app/interfaces/cliente';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-conta',
  templateUrl: './cadastrar-conta.component.html',
  styleUrls: ['./cadastrar-conta.component.css']
})
export class CadastrarContaComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('',Validators.required),
    cliente: new FormGroup({
      id: new FormControl('405',Validators.required),
      nome: new FormControl('Lucas Cliente Teste',Validators.required),
      cpf: new FormControl('24672798046',Validators.required),
      email: new FormControl('email@email.com',Validators.required),
      observacoes: new FormControl('Teste',Validators.required),
      ativo: new FormControl('true',Validators.required),
    }),
    numero: new FormControl('', Validators.required),
    saldo: new FormControl(''),
  })
  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  enviarConta(){
    const conta: IConta = this.formGroup.value;
    this.contaService.cadastrar(conta).subscribe(contaAPI=> {
      Swal.fire('Sucesso!','Cadastro com sucesso!','success');
      this.router.navigate([`/conta`])
    }, error=> {
      console.error(error);
    })
  }
}
