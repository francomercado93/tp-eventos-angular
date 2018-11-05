import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";
import { supportsWebAnimations } from "@angular/animations/browser/src/render/web_animations/web_animations_driver";
import { Locacion } from "./Locacion";

export class EventoCerrado extends Evento {

    invitadosConfirmados: Array<Usuario> = []
    constructor(public nombreEvento?: String, public capacidadMaxima?: number, public cantidadAsistentesConfirmados?: number, public cantidadAsistentesPosibles?: number,
        public rechazados?: number, public locacion?: Locacion, public fechaCreacion?: Date, public finEvento?: Date, public organizadorEvento?: String, public inicioEvento?: Date,
        public fechaMaximaConfirmacion?: Date) {
        super()
        this.inicioEvento = new Date()
        this.finEvento = new Date()
        this.fechaMaximaConfirmacion = new Date()
    }
    // private capacidadMaxima?: number, private cantidadAsistentesConfirmados?: NUMBER
 

// agregarAsistente(invitado: Usuario) {
//     this.asistentes.push(invitado)      //agrega a la lista de asistentes posibles
// }

// usuarioRechazaInvitacion(invitado: Usuario): void {
//     // this.asistentes.splice(this.asistentes.indexOf(invitado), 1)
//     this.removerUsuario(invitado)
// }

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
    // super.removerUsuario(unUsuario)
}
}
