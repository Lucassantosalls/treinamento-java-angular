import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISaqueDesposito } from 'src/app/interfaces/saque-desposito';
import { ContaService } from 'src/app/services/conta.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saque',
  templateUrl: './saque.component.html',
  styleUrls: ['./saque.component.css']
})
export class SaqueComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({
    agencia: new FormControl('', Validators.required),
    numeroConta: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
  })
  constructor(private contaService: ContaService, private router: Router) { }

  ngOnInit(): void {
  }

  sacar(){
    const saque: ISaqueDesposito = this.formGroup.value;
    this.contaService.saque(saque).subscribe(saqueAPI=> {
      Swal.fire('Sucesso!','Saque com sucesso!','success');
      this.router.navigate([`/conta`])
    }, error=> {
      console.error(error);
    })
  }
}
