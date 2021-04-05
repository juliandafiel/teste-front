import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms'; 
import { InputComponent } from './shared/input/input.component'; 
import { ProdutoComponent } from './produto/produto.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { ProdutoService } from './produto/produto.service'; 
import { MinhasComprasComponent } from './minhas-compras/minhas-compras.component';
import { MinhasComprasService } from './minhas-compras/minhas-compras.service';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { ProdutosService } from './produtos/produtos.service';
import { CarrinhoComprasComponent } from './restaurant-detail/carrinho-compras/carrinho-compras.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent, 
    InputComponent, 
    ProdutoComponent,
    ProdutosComponent,
    MinhasComprasComponent,
    CadastroProdutosComponent, 
    CarrinhoComprasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutoService,ProdutosService,
      MinhasComprasService,{provide:LOCALE_ID,useValue:'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
