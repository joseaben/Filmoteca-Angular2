import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TablaDatosComponent } from './tabla-datos/tabla-datos.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaDatosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent,TablaDatosComponent]
})
export class AppModule { }
