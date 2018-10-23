import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuario } from 'src/model/domain/usuario/usuario';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.usuario = this.usuariosService.usuarioTest
  }

}
