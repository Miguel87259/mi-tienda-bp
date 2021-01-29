import { Component, OnInit } from '@angular/core';
import { Ordenes } from 'src/app/models/ordenes.model';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  public dataTable:Array<any> = []; /** Contiene la informacion a mostrar en la tabla de ordenes */
  public dataOrdenes:Array<Ordenes> = []; /** Contiene la informacion de las ordenes */

  constructor(
    private ordenesService:OrdenesService, /** Servicio de ordenes */
    private message: NzMessageService /** Servicio para creacion de alertas */
    ) { }

  ngOnInit(): void {
    this.getOrdenes();
  }

  /**
   * Obtiene todas las ordenes
   *
   * @private
   * @memberof OrdenesComponent
   */
  private getOrdenes(){
    this.ordenesService.getOrdenes().subscribe(
      data => {
        this.dataTable = [...data];
        this.dataOrdenes = data;
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
   * @memberof OrdenesComponent
   */
  createAlert(type: string,message: string): void {
    this.message.create(type, message);
  }

}
