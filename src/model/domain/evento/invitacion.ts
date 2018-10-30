import { Usuario } from "../usuario/usuario";
import { EventoCerrado } from "./eventoCerrado";

export class Invitacion {

    constructor(public invitado?: Usuario, public evento?: EventoCerrado,
        public cantidadAcompaniantesMaxima?: number, public estaRechazado?: Boolean, public estaConfirmado?: Boolean) {
    }

    static fromJson(invJson) {
        const result: Invitacion = Object.assign(new Invitacion(), invJson)
        result.evento = Object.assign(new EventoCerrado(), invJson.evento)
        // result.invitado = Object.assign(new Usuario(), invJson.invitado)
        // result.evento.agregarAsistente(result.invitado)
        // result.evento = invJson.fromJson(invJson.evento)// no funciona
        return result
    }
    toJSON(): any {
        const result: any = Object.assign({}, this)
        return result
    }

    confirmar(cantidadAcompaniantesInvitado: number): void {
        if (cantidadAcompaniantesInvitado > this.cantidadAcompaniantesMaxima) {
            throw ("La cantidad de acompaniantes supera la maxima permitida en la invitacion")
        }
        this.evento.confirmarUsuario(this.invitado)
    }

    rechazar() {
        this.estaRechazado = true
        this.evento.usuarioRechazaInvitacion(this.invitado)
    }

}