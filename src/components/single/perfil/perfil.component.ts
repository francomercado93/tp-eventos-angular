import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { UsuariosService } from 'src/services/usuarios.service';

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

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  async ngOnInit() {
    try {
      this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
      this.usuario.amigos = await this.usuariosService.getAmigosUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
    this.router.routeReuseStrategy.shouldReuseRoute = () => false
  }

  eliminarAmigo(amigo: Usuario) {
    this.usuario.eliminarAmigo(amigo)
    this.usuariosService.actualizarUsuario(this.usuario, amigo)
  }
}
