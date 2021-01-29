import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-form-cliente',
  templateUrl: './form-cliente.component.html',
  styleUrls: ['./form-cliente.component.css']
})
export class FormClienteComponent implements OnInit {

  public formCliente!: FormGroup; /** Formulario de clientes */

  constructor(
    private fb: FormBuilder, /** Creacion del formulario */
    private clienteService: ClienteService, /** Servicio de clientes */
    private message: NzMessageService, /** Servicio para creacion de alertas */
    private route: Router /** Servicio de navegacion */
    ) { }

  ngOnInit(): void {

    /** Estructura del formulario de clientes */
    this.formCliente = this.fb.group({
      nombre: [null, [Validators.required]],
      apellidos: [null, [Validators.required]]
    });

  }


  /**
   * Metodo para enviar el formulario y crear cliente
   *
   * @memberof FormClienteComponent
   */
  submitForm(): void {
    /**Validando estado del formulario */
    if(this.formCliente.valid){
      this.clienteService.saveClientes(this.formCliente.value).subscribe(
        data => {
          this.createAlert("success","Cliente registrado correctamente");
          this.route.navigate(["/clientes"]);
        },
        err => {
          this.createAlert("error","Ocurrio un error al registrar el cliente");
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
   * @memberof FormClienteComponent
   */
  createAlert(type: string,message: string): void {
    this.message.create(type, message);
  }


}
