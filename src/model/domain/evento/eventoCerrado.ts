import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";

export class EventoCerrado extends Evento {

    invitadosConfirmados: Array<Usuario> = []

    constructor(nombre, fechaInicio, lugar, organizadorEvento, fechaMaximaConfirmacion) {
        super(nombre, fechaInicio, lugar, organizadorEvento);
        this.fechaMaximaConfirmacion = fechaMaximaConfirmacion
    }

    usuarioRechazaInvitacion(invitado: Usuario) {
        this.removerUsuario(invitado)
    }
    cumpleCondiciones(invitado: Usuario) {
        return super.usuarioEstaATiempo(invitado)
    }

    confirmarUsuario(invitado: Usuario): void {
        if (this.cumpleCondiciones(invitado)) {
            this.agregarListaConfirmado(invitado)
        } else
            throw ("Usuario paso la fecha maxima de confirmacion ")
    }
    agregarListaConfirmado(unUsuario: Usuario) {
        this.invitadosConfirmados.push(unUsuario)
        super.removerUsuario(unUsuario)
    }
}
