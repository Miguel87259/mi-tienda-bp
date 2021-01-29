import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-form-productos',
  templateUrl: './form-productos.component.html',
  styleUrls: ['./form-productos.component.css']
})
export class FormProductosComponent implements OnInit {

  public productosForm!: FormGroup; /** Formulario de productos */

  constructor(
    private fb: FormBuilder, /** Creacion del formulario */
    private productoService: ProductosService, /** Servicio de productos */
    private message: NzMessageService, /** Servicio para creacion de alertas */
    private route: Router /** Servicio de navegacion */
    ) { }

  ngOnInit(): void {

    /** Estructura del formulario de productos */
    this.productosForm = this.fb.group({
      nombre: [null, [Validators.required]],
      descripcion: [null, [Validators.required]],
      precio: [0, [Validators.required]]
    });

  }

  formatterDollar = (value: number) => `$ ${value}`; /** Formatear el valor a mostrar con el $ */
  parserDollar = (value: string) => value.replace('$ ', ''); /** Quitando el signo de $ */


  /**
   * Metodo para guardar productos
   *
   * @memberof FormProductosComponent
   */
  submitForm(): void {
    /**Validando formulario de productos */
    if(this.productosForm.valid){
      this.productoService.saveProductos(this.productosForm.value).subscribe(
        data => {
          this.createAlert("success","Producto registrado correctamente");
          this.route.navigate(["/productos"]);
        },
        err => {
          this.createAlert("error","Ocurrio un error al registrar el producto");
        }
      )
    }
  }

  /**
   * Crea alertas dinamicas,
   * recibe el tipo de alerta y el mensaje a mostrar.
   *
   * @param {string} type
   * @param {string} message
   * @memberof FormProductosComponent
   */
  createAlert(type: string,message: string): void {
    this.message.create(type, message);
  }

}
