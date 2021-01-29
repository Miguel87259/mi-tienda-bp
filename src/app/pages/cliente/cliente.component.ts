import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/models/clientes.model';
import { ClienteService } from 'src/app/services/cliente.service';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  public dataTable:Array<any> = []; /** Contiene la informacion a mostrar en la tabla de clientes */
  public dataClient:Array<Clientes> = []; /** Contiene la informacion de los clientes */

  constructor(
    private clienteService:ClienteService, /** Servicio de clientes */
    private message: NzMessageService /** Servicio para creacion de alertas */
    ) { }

  ngOnInit(): void {
    this.getClient();
  }

  /**
   * Obtiene todos los clientes
   *
   * @private
   * @memberof ClienteComponent
   */
  private getClient(){
    this.clienteService.getClientes().subscribe(
      data => {
        this.dataTable = [...data];
        this.dataClient = data;
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
   * @memberof ClienteComponent
   */
  createAlert(type: string,message: string): void {
    this.message.create(type, message);
  }

}
