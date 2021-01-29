import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";
import { Productos } from "../models/productos.model";

@Injectable({
  providedIn: "root"
})
export class ProductosService {
  private ordenes: Productos;

  constructor(private http: HttpClient) {}

  /**
   * Obtiene la informacion de todos los productos
   * http://localhost:3000/productos
   *
   * @return {*}  {Observable<any>}
   * @memberof ProductosService
   */
  public getProductos(): Observable<any> {
    return this.http.get<Productos>(environment.baseUrl+"productos");
  }

  /**
   * Guarda productos
   * http://localhost:3000/productos/agregar
   *
   * @param {*} data
   * @return {*}  {Observable<any>}
   * @memberof ProductosService
   */
  public saveProductos(data): Observable<any> {
    return this.http.post<Productos>(environment.baseUrl+"productos",data);
  }


}
