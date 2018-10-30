import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmigosMiPerfilComponent } from './amigosMiPerfil/amigosMiPerfil.component';
import { PerfilComponent } from './perfil.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    AmigosMiPerfilComponent,
    PerfilComponent]
})
export class PerfilModule { }
