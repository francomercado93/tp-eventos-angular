import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { UsuariosService } from 'src/services/usuarios.service';

@Component({
  selector: 'app-amigosMiPerfil',
  templateUrl: './amigosMiPerfil.component.html',
  styleUrls: ['./amigosMiPerfil.component.css']
})
export class AmigosMiPerfilComponent implements OnInit {

  amigos: Array<Usuario>
  usuario: Usuario
  errors = []

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  ngOnInit() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false

    this.usuariosService.getUsuarioById(USRTESTID).subscribe(
      data => this.usuario = data,
      error => {
        console.log("error", error)
        this.errors.push(error._body)
      }
    )
  }

  eliminarAmigo(amigo: Usuario) {
    this.usuario.eliminarAmigo(amigo)
    this.usuariosService.actualizarUsuario(this.usuario, amigo)
  }

}

