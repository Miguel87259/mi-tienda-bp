import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './pages/cliente/cliente.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FormClienteComponent } from './utils/form-cliente/form-cliente.component';
import { FormOrdenesComponent } from './utils/form-ordenes/form-ordenes.component';
import { FormProductosComponent } from './utils/form-productos/form-productos.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';
import { ViewOneDataComponent } from './utils/view-one-data/view-one-data.component';

const routes: Routes = [
  {path: "", component: HomeComponent}, /*  Redireccionando a menu principal si la ruta es vacia  */
  {path: "home", component: HomeComponent}, /* url para redireccionar a menu principal */
  {path: "clientes", component: ClienteComponent}, /* url para redireccionar a pagina donde se mostraran todos los clientes ingresados */
  {path: "clientes/agregar", component: FormClienteComponent}, /* url para redireccionar a pagina donde se agregaran los clientes */
  {path: "clientes/mostrar/:id", component: ViewOneDataComponent}, /* url para redireccionar a pagina donde se mostrara la informacion de un cliente */
  {path: "productos", component: ProductosComponent}, /* url para redireccionar a pagina donde se mostraran todos los productos */
  {path: "productos/agregar", component: FormProductosComponent}, /* url para redireccionar a pagina donde se agregaran los productos */
  {path: "productos/mostrar/:id", component: ViewOneDataComponent}, /* url para redireccionar a pagina donde se mostrara la informacion de un producto */
  {path: "ordenes", component: OrdenesComponent}, /* url para redireccionar a pagina donde se mostraran todas las ordenes */
  {path: "crear-orden", component: FormOrdenesComponent}, /* url para redireccionar a pagina donde se agregaran las ordenes*/
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
