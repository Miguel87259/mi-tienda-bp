import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ClienteService } from 'src/app/services/cliente.service';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-form-ordenes',
  templateUrl: './form-ordenes.component.html',
  styleUrls: ['./form-ordenes.component.css']
})
export class FormOrdenesComponent implements OnInit {

  public ordenesForm!: FormGroup; /** Formulario de ordenes */
  public selectCliente = []; /** Data del select de clientes */
  public selectProducto = []; /** Data del select de productos */
  public  dateFormat = 'dd/MM/yyyy'; /**  Formato de fechas a mostrar */

  constructor(
    private fb: FormBuilder, /** Creacion del formulario */
    private clienteService: ClienteService, /** Servicio de clientes */
    private productoService: ProductosService, /** Servicio de productos */
    private ordenesService: OrdenesService, /** Servicio de ordenes */
    private message: NzMessageService, /** Servicio para creacion de alertas */
    private route: Router) { }

  ngOnInit(): void {

    /** Estructura para el formulario de ordenes */
    this.ordenesForm = this.fb.group({
      idProducto: [null, [Validators.required]],
      idCliente: [null, [Validators.required]],
      cantidad: [null, [Validators.required]],
      fecha: [null, [Validators.required]]
    });

    /** Llamando metodos para llenado de selects */
    this.getClientes();
    this.getProductos();

  }


  /**
   * Metodo para guardar ordenes
   *
   * @memberof FormOrdenesComponent
   */
  submitForm(): void {
    /**Validando formulario */
    if(this.ordenesForm.valid){
      this.ordenesService.saveOrden(this.ordenesForm.value).subscribe(
        data => {
          this.createAlert("success","Orden registrada correctamente");
          this.route.navigate(["/ordenes"]);
        },
        err => {
          this.createAlert("error","Ocurrio un error al registrar la orden");
        }
      )
    }
  }

  /**
   * Metodo para obtener clientes
   *
   * @memberof FormOrdenesComponent
   */
  getClientes(){
    this.clienteService.getClientes().subscribe(
      data => {
        this.selectCliente = data;
      },
      err => {

      }
    )
  }

  /**
   * Metodo para obtener productos
   *
   * @memberof FormOrdenesComponent
   */
  getProductos(){
    this.productoService.getProductos().subscribe(
      data => {
        this.selectProducto = data;
      },
      err => {

      }
    )
  }

  /**
   * Crea alertas dinamicas,
   * recibe el tipo de alerta y el mensaje a mostrar.
   *
   * @param {string} type
   * @param {string} message
   * @memberof FormOrdenesComponent
   */
  createAlert(type: string,message: string): void {
    this.message.create(type, message);
  }

}
