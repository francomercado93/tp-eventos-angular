import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/model/domain/usuario/usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { USRTESTID } from 'src/app/configuration';
import { UsuariosService } from 'src/services/usuarios.service';

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

  ngOnInit() {
      this.usuariosService.getUsuarioById(USRTESTID).subscribe(
        data => this.usuario = data,
        error => {
          console.log("error", error)
          this.errors.push(error._body)
        }
      )
      this.router.routeReuseStrategy.shouldReuseRoute = () => false
    }

}
