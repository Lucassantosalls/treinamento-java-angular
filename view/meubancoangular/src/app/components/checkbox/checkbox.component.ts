import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {

  @Input()
  textoCheck: string = '';
  ativoCliente: boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
