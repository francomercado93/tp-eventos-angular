import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";

export class EventoCerrado extends Evento {

    invitadosConfirmados: Array<Usuario> = []

    // override cumpleCondiciones(Usuario invitado){
    //     super.usuarioEstaATiempo(invitado)
    // }

    // confirmarUsuario(Usuario invitado): void {
    //     if (this.cumpleCondiciones(invitado)) {
    //         this.agregarListaConfirmado(invitado)
    //     } else
    //         throw ("Usuario paso la fecha maxima de confirmacion ")
    // }
}
