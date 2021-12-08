import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ICliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes: ICliente[] = [];
  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listarTodosClientes();
  }

  listarTodosClientes(){
    this.clienteService.listarTodosClientes().subscribe(clientesApi => {
      this.clientes = clientesApi;
    })
  }

  confirmar(id:number){
    Swal.fire({
      title: 'Você tem certeza?',
      text: "Não é possível reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, apagar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.clienteService.remover(id).subscribe(result=>{
          Swal.fire(
            'Apagado!',
            'Deletado com sucesso.',
            'success'
          );
          this.listarTodosClientes();
        }, error=>{
          console.error(error);
        });
      }
    })
  }
}
