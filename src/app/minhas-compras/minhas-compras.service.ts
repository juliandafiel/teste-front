import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from "@angular/http";
import { ErrorHandler } from "app/app.error-hander";
import { API, API_PJ, USUARIO_ID } from "app/app.api";
import { Compra } from "./compra.model";




@Injectable()
export class MinhasComprasService{
    constructor(private http:Http){

    }

    compras : Compra[];

    listar() : Observable<Compra[]> {
        return this.http.get(`${API_PJ}/compra/listar/${USUARIO_ID}`).map(response => response.json())
        .catch(ErrorHandler.handlerError);
    }
    
}