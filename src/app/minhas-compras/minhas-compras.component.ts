import { Component, OnInit } from '@angular/core';
import { Compra } from './compra.model';
import { MinhasComprasService } from './minhas-compras.service';

@Component({
  selector: 'app-minhas-compras',
  templateUrl: './minhas-compras.component.html' 
})
export class MinhasComprasComponent implements OnInit {

  constructor(private minhasComprasService:MinhasComprasService) { }

  minhasCompras:Compra[]=[];

  ngOnInit() {
    this.minhasComprasService.listar()
    .subscribe(minhasCompras => this.minhasCompras = minhasCompras);
  }

}
