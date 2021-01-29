import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Clientes } from "../models/clientes.model";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class ClienteService {
  private cliente: Clientes;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la informacion de todos los clientes
   * http://localhost:3000/clientes
   *
   * @return {*}  {Observable<any>}
   * @memberof ClienteService
   */
  public getClientes(): Observable<any> {
    return this.http.get<Clientes>(environment.baseUrl+"clientes");
  }

  /**
   * Guarda los clientes
   * http://localhost:3000/clientes/agregar
   *
   * @param {*} data
   * @return {*}  {Observable<any>}
   * @memberof ClienteService
   */
  public saveClientes(data): Observable<any> {
    return this.http.post<Clientes>(environment.baseUrl+"clientes",data);
  }

}
