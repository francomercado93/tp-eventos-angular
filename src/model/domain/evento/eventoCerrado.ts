import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";
import { supportsWebAnimations } from "@angular/animations/browser/src/render/web_animations/web_animations_driver";

export class EventoCerrado extends Evento {

    invitadosConfirmados: Array<Usuario> = []

    constructor(private capacidadMaxima?: number, private cantidadAsistentesConfirmados?: number) {
        super()
    }

    agregarAsistente(invitado: Usuario) {
        this.asistentes.push(invitado)      //agrega a la lista de asistentes posibles
    }

    usuarioRechazaInvitacion(invitado: Usuario): void {
        this.removerUsuario(invitado)
    }

    cumpleCondiciones(invitado: Usuario) {
        return super.usuarioEstaATiempo(invitado)
    }

    confirmarUsuario(invitado: Usuario) {
        if (this.cumpleCondiciones(invitado)) {
            this.agregarListaConfirmado(invitado)
        }
        throw ("Usuario paso la fecha maxima de confirmacion ")
    }


    agregarListaConfirmado(unUsuario: Usuario) {
        this.invitadosConfirmados.push(unUsuario)
        super.removerUsuario(unUsuario)
    }
}
