import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Headers, Http, RequestOptions } from "@angular/http";
import { ErrorHandler } from "app/app.error-hander";
import { API, API_PJ } from "app/app.api";
import { Produto } from "./produto.model";



@Injectable()
export class ProdutoService{

    constructor(private http:Http){

    }

    prod : Produto;

    listar() : Observable<Produto[]> {
        return this.http.get(`${API_PJ}/produto/listar`).map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }


    cadastrar(produto:Produto):Observable<Produto>{
        const headers = new Headers();
        headers.append("Content-Type","application/json");
        
        return this.http.post(`${API_PJ}/produto/inserir`, 
        JSON.stringify(produto),
             new RequestOptions({headers:headers}))
             .map(response => response.json())
             .catch(ErrorHandler.handlerError);
    }

    remover(produto:Produto):Observable<Produto>{
        const headers = new Headers();
        headers.append("Content-Type","application/json");
        
        return this.http.delete(`${API_PJ}/produto/excluir/${produto.id}`)
             .map(response => response.json())
             .catch(ErrorHandler.handlerError);
    }
    
}