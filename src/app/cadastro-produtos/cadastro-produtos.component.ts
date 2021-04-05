import { Component, ContentChild, Input, OnInit, Output } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Produto } from 'app/produto/produto.model';
import { ProdutoService } from 'app/produto/produto.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html'
})
export class CadastroProdutosComponent implements OnInit {

  @Input() produto:Produto;
  produtos:Produto[] = [];

  constructor(private produtoService:ProdutoService) { }

  ngOnInit() {
    this.produtoService.listar()
    .subscribe(produtos=>{this.produtos = produtos});
  }

  cadastrarProduto(produto:Produto){
      return this.produtoService.cadastrar(produto)
      .subscribe(produto => {this.produtos.push(produto)}); 
  }

  removerProduto(produto:Produto){
    return this.produtoService.remover(produto)
      .subscribe(produto => {this.produtos.splice(this.produtos.indexOf(produto),1)}); 
  }

  editarProduto(produto:Produto){
    
    this.produto = produto; 
  }

}
