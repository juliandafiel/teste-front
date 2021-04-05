import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { API_PJ } from "app/app.api";
import { ErrorHandler } from "app/app.error-hander";
import { Produto } from "app/produto/produto.model";
import { Observable } from "rxjs";



@Injectable()
export class ProdutosService{

    constructor(private http:Http){

    }

    produtos : Produto[];

    listar() : Observable<Produto[]> {
        return this.http.get(`${API_PJ}/produto/listar`)
        .map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }
    
}