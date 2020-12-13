import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DerechaComponent } from './shared/derecha/derecha.component';
import { IzquierdaComponent } from './shared/izquierda/izquierda.component';
import { SuperiorComponent } from './shared/superior/superior.component';
import { InferiorComponent } from './shared/inferior/inferior.component';
import { HomeComponent } from './shared/home/home.component';
import { InicioComponent } from './inicio/inicio.component';
import { PreloadComponent } from './shared/preload/preload.component';

@NgModule({
  declarations: [
    AppComponent,
    DerechaComponent,
    IzquierdaComponent,
    SuperiorComponent,
    InferiorComponent,
    HomeComponent,
    InicioComponent,
    PreloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
