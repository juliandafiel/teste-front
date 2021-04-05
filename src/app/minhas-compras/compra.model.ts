import { Produto } from "app/produto/produto.model";

export class Compra{

    constructor(
        public id:number, 
        public idUsuario:number,
        public produto:Produto,
        public descontoPercentual:number,
        public valorSemDesconto:number,
        public valorComDesconto:number,
        public quantidade:number){

        }
}