import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';

@Component({
  selector: 'app-amigosMiPerfil',
  templateUrl: './amigosMiPerfil.component.html',
  styleUrls: ['./amigosMiPerfil.component.css']
})
export class AmigosMiPerfilComponent implements OnInit {
 
  amigos: Array<Usuario>
  usuario: Usuario
  
  constructor(/*private usuarioService: StubUsuariosService*/) { }

  ngOnInit() {
    // this.usuario = this.usuarioService.usuarioTest
    // this.amigos = this.usuario.amigos
  }

  eliminarAmigo(amigo: Usuario){
    this.usuario.eliminarAmigo(amigo)
  }

}

