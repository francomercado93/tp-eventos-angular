import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";

export class EventoCerrado extends Evento {

    agregarAsistente(invitado: Usuario) {
        this.asistentes.push(invitado)      //agrega a la lista de asistentes posibles
        console.log('AGREGARaSISTENTE:  '+ this.asistentes)
    }

    invitadosConfirmados: Array<Usuario> = []

    constructor(nombre, fechaInicio, lugar, organizadorEvento, fechaMaximaConfirmacion) {
        super(nombre, fechaInicio, lugar, organizadorEvento);
        this.fechaMaximaConfirmacion = fechaMaximaConfirmacion
    }

    // usuarioRechazaInvitacion(invitado: Usuario) {
    //     this.removerUsuario(invitado)
    // }
    cumpleCondiciones(invitado: Usuario) {
        return super.usuarioEstaATiempo(invitado)
    }

    // confirmarUsuario(invitado: Usuario): void {
    //     if (this.cumpleCondiciones(invitado)) {
    //         this.agregarListaConfirmado(invitado)
    //     } else
    //         throw ("Usuario paso la fecha maxima de confirmacion ")
    // }
    // agregarListaConfirmado(unUsuario: Usuario) {

    //     console.log('DATO3:  ' + this.asistentes)
    //     this.invitadosConfirmados.push(unUsuario)
    //     super.removerUsuario(unUsuario)
    // }
}
