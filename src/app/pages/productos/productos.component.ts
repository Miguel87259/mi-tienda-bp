import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/services/productos.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  public dataTable:Array<any> = []; /** Contiene la informacion a mostrar en la tabla de productos */
  public dataProductos:Array<Productos> = []; /** Contiene la informacion de los productos */

  constructor(
    private productosService:ProductosService, /** Servicio de productos */
    private message: NzMessageService /** Servicio para creacion de alertas */
    ) { }

  ngOnInit(): void {
    this.getProductos();
  }

  /**
   * Obtiene todos los productos
   *
   * @private
   * @memberof ProductosComponent
   */
  private getProductos(){
    this.productosService.getProductos().subscribe(
      data => {
        this.dataTable = [...data];
        this.dataProductos = data;
      },
      err => {
        this.createAlert("error","Ocurrio un error al obtener los datos");
      }
    )
  }


  /**
   * Crea alertas dinamicas,
   * recibe el tipo de alerta y el mensaje a mostrar.
   *
   * @param {string} type
   * @param {string} message
   * @memberof ProductosComponent
   */
  createAlert(type: string,message: string): void {
    this.message.create(type, message);
  }


}
