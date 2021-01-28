import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/* Componentes */
import { ClienteComponent } from './pages/cliente/cliente.component';
import { OrdenesComponent } from './pages/ordenes/ordenes.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { FormClienteComponent } from './utils/form-cliente/form-cliente.component';
import { FormOrdenesComponent } from './utils/form-ordenes/form-ordenes.component';
import { FormProductosComponent } from './utils/form-productos/form-productos.component';
import { HomeComponent } from './pages/home/home.component';
import { ViewOneDataComponent } from './utils/view-one-data/view-one-data.component';
import { NotFoundComponent } from './utils/not-found/not-found.component';

/* AntDesign */
import { NzCardModule } from 'ng-zorro-antd/card';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzButtonModule } from 'ng-zorro-antd/button';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    OrdenesComponent,
    ProductosComponent,
    FormClienteComponent,
    FormOrdenesComponent,
    FormProductosComponent,
    HomeComponent,
    ViewOneDataComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NzCardModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzTableModule,
    NzButtonModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
