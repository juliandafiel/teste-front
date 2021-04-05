import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto.model';
import { ProdutoService } from '../produto/produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html' 
})
export class ProdutosComponent implements OnInit {

  produtos : Produto[];
  constructor(private produtosService:ProdutoService) { }

  ngOnInit() {
    this.produtosService.listar()
    .subscribe(produtos => this.produtos = produtos);
  }

  addProdutos(produto:Produto){
    console.log(produto);
  }

}
