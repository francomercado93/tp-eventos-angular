import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { EventoComponent } from './evento/evento.component';

@NgModule({
   declarations: [
      AppComponent,
      UsuarioComponent,
      EventoComponent,
      EventoComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
