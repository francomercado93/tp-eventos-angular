import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { UsuariosService } from 'src/services/usuarios.service';
import { mostrarError } from '../perfil.component';

@Component({
  selector: 'app-amigosMiPerfil',
  templateUrl: './amigosMiPerfil.component.html',
  styleUrls: ['./amigosMiPerfil.component.css']
})
export class AmigosMiPerfilComponent implements OnInit {

  // amigos: Array<Usuario>
  usuario: Usuario
  errors = []

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  async ngOnInit() {
    try {
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
      this.usuario = await this.usuariosService.getUsuarioById(USRTESTID)
    } catch (error) {
      mostrarError(this, error)
    }
  }

  eliminarAmigo(amigo: Usuario) {
    this.usuario.eliminarAmigo(amigo)
    this.usuariosService.actualizarUsuario(this.usuario, amigo)
  }

}

