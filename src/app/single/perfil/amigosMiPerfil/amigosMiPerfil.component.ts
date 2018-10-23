import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-amigosMiPerfil',
  templateUrl: './amigosMiPerfil.component.html',
  styleUrls: ['./amigosMiPerfil.component.css']
})
export class AmigosMiPerfilComponent implements OnInit {
 
  amigos: Array<Usuario>
  usuario: Usuario
  
  constructor(private usuarioService: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.usuarioService.usuarioTest
    this.amigos = this.usuario.amigos
  }

  eliminarAmigo(){
    this.usuario.eliminarAmigo()
  }

}

