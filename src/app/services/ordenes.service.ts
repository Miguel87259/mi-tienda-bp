import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Ordenes } from "../models/ordenes.model";

@Injectable({
  providedIn: "root"
})
export class OrdenesService {
  private ordenes: Ordenes;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la informacion de todos las ordenes
   * http://localhost:3000/ordenes
   *
   * @return {*}  {Observable<any>}
   * @memberof OrdenesService
   */
  public getOrdenes(): Observable<any> {
    return this.http.get<Ordenes>(environment.baseUrl+"ordenes");
  }

  /**
   * Guarda las ordenes
   * http://localhost:3000/ordenes/agregar
   *
   * @param {*} data
   * @return {*}  {Observable<any>}
   * @memberof OrdenesService
   */
  public saveOrden(data): Observable<any> {
    return this.http.post<Ordenes>(environment.baseUrl+"ordenes",data);
  }

}
