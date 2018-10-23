import { Usuario } from "../usuario/usuario";
import { AMIGOS } from "./amigos";

export class JuegoDatosTest{
    usuarioTest: Usuario
    amigosTest: Array<Usuario> = []
    incializarUsuario(){
        this.usuarioTest = new Usuario('Joquin', 'Perreyra', 'Joac', 'joaco88@gmail.com')
        this.usuarioTest.amigos = AMIGOS
        // this.usuarioTest.recibirInvitacion(new)
    }
}