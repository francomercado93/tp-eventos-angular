import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";
import { supportsWebAnimations } from "@angular/animations/browser/src/render/web_animations/web_animations_driver";
import { Locacion } from "./Locacion";

export class EventoCerrado extends Evento {

    constructor(public nombreEvento?: string, public capacidadMaxima?: number, public cantidadAsistentesConfirmados?: number, public cantidadAsistentesPosibles?: number,
        public rechazados?: number, public locacion?: Locacion, public fechaCreacion?: Date, public finEvento?: Date, public organizadorEvento?: String, public inicioEvento?: Date,
        public fechaMaximaConfirmacion?: Date) {
        super()

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
        // this.invitadosConfirmados.push(unUsuario)
        // super.removerUsuario(unUsuario)
    }
}
