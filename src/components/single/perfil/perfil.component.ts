import { Component, OnInit, Inject } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { UsuariosService } from 'src/services/usuarios.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  usuario: Usuario
  amigo: Usuario
  usuariosService: UsuariosService
}

export function mostrarError(component, error) {
  console.log("error", error)
  component.errors.push(error._body)
}

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers: [UsuariosService]
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  errors = [];

  constructor(private usuariosService: UsuariosService, private router: Router, public dialog: MatDialog) { }

  async ngOnInit() {
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
    this.usuariosService.usuarioActual = this.usuario
  }

  openDialog(amigo: Usuario) {
    const dialogRef = this.dialog.open(DialogConfirmacion, {
      data: {
        usuario: this.usuario,
        amigo: amigo,
        usuariosService: this.usuariosService
      }
    })
  }
}

@Component({
  selector: 'dialog-confirmacion',
  templateUrl: 'dialog-confirmacion.html',
})
export class DialogConfirmacion {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  eliminarAmigo(): void {
    this.data.usuario.eliminarAmigo(this.data.amigo)
    this.data.usuariosService.actualizarUsuario(this.data.usuario, this.data.amigo)
  }
}

