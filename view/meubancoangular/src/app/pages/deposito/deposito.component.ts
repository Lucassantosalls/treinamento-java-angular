import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDesposito } from 'src/app/interfaces/saque-desposito';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css']
})
export class DepositoComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
  })
  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  deposito(){
    const deposito: ISaqueDesposito = this.formGroup.value;
    this.contaService.deposito(deposito).subscribe(depositoAPI=> {
      Swal.fire('Sucesso!','Deposito feito com sucesso!','success');
      this.router.navigate(['/conta'])
    }, error=>{
      console.error(error);
    })
  }

}
