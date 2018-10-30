import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";
import { supportsWebAnimations } from "@angular/animations/browser/src/render/web_animations/web_animations_driver";
import { Locacion } from "./Locacion";

export class EventoCerrado extends Evento {

    invitadosConfirmados: Array<Usuario> = []
    // private capacidadMaxima?: number, private cantidadAsistentesConfirmados?: NUMBER
    constructor(public nombreEvento?: String, public inicioEvento?: Date, public fechaMaximaConfirmacion?: Date, public finEvento?: Date, public locacion?: Locacion,
        public organizadorEvento?: Usuario, public asistentes?: Array<Usuario>, public rechazados?: number, public cantidadAsistentesPosibles?: number) {
        super(nombreEvento, inicioEvento, fechaMaximaConfirmacion, finEvento, locacion,
            organizadorEvento, asistentes, rechazados, cantidadAsistentesPosibles)
        this.inicioEvento = new Date()
        this.finEvento = new Date()
        this.fechaMaximaConfirmacion = new Date()
    }

    agregarAsistente(invitado: Usuario) {
        this.asistentes.push(invitado)      //agrega a la lista de asistentes posibles
    }

    usuarioRechazaInvitacion(invitado: Usuario): void {
        // this.asistentes.splice(this.asistentes.indexOf(invitado), 1)
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
