import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Produto } from './produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html' 
})
export class ProdutoComponent implements OnInit {

  @Input() produto : Produto;
  @Output() produtoAdicionado = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  addProduto(produto:Produto){
    this.produtoAdicionado.emit(produto);
  }

}
