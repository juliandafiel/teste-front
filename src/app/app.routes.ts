import { Routes } from "@angular/router";
import { CadastroProdutosComponent } from "./cadastro-produtos/cadastro-produtos.component";
import { HomeComponent } from "./home/home.component"; 
import { MinhasComprasComponent } from "./minhas-compras/minhas-compras.component";
import { ProdutosComponent } from "./produtos/produtos.component";

export const ROUTES: Routes = [
    {path: '', component: HomeComponent}, 
    {path: 'produtos', component: ProdutosComponent},
    {path: 'cadastroProdutos', component: CadastroProdutosComponent},
    {path: 'minhasCompras', component: MinhasComprasComponent}    
]