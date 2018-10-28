import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';

@Component({
  selector: 'app-amigosMiPerfil',
  templateUrl: './amigosMiPerfil.component.html',
  styleUrls: ['./amigosMiPerfil.component.css']
})
export class AmigosMiPerfilComponent implements OnInit {

  amigos: Array<Usuario>
  usuario: Usuario
  errors = []

  constructor(private usuariosService: UsuariosService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.router.routeReuseStrategy.shouldReuseRoute = () => false

    // this.usuariosService.getUsuarioById(USRTESTID).subscribe(
    //   data => this.usuario = data,
    //   error => {
    //     console.log("error", error)
    //     this.errors.push(error._body)
    //   }
    // )
    this.usuariosService.getAmigosUsuarioById(USRTESTID).then(
      res => {
        this.amigos = res.json().map(usuarioJson => Usuario.fromJson(usuarioJson))
        // Dado el identificador de la tarea, debemos obtenerlo y mostrar el asignatario en el combo
        this.route.params.subscribe(params => {
          this.usuariosService.getUsuarioById(USRTESTID).subscribe(data => {
            this.usuario = data
            this.usuario.amigos = this.amigos 
          }
          )
        })  
      }
    ).catch(error => this.errors.push(error))
    // Truco para que refresque la pantalla 
    // )
    // this.usuariosService.getAmigosUsuarioById(USRTESTID).subscribe(
    //   data => this.usuario.amigos = data,
    //   error => {
    //     console.log("error", error)
    //     this.errors.push(error._body)
    //   }
    // )
    // this.usuario.amigos = this.amigos
    // agregarAmigos(this.amigos)
  }
  // agregarAmigos(amigos: Usuario[]): any {
  // }

  eliminarAmigo(amigo: Usuario) {
    this.usuario.eliminarAmigo(amigo)
    this.usuariosService.actualizarUsuario(this.usuario, amigo)
  }

}

