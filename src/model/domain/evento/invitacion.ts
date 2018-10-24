import { Usuario } from "../usuario/usuario";
import { EventoCerrado } from "./eventoCerrado";

export class Invitacion {
    evento: EventoCerrado
    invitado: Usuario
    cantidadAcompaniantesMaxima: number
    // estaRechazado = false
    // estaConfirmado = false
    estaPendiente: boolean;

    constructor(invitado: Usuario, unEvento: EventoCerrado, unaCantidadAcompaniantesMaxima: number) {
        this.invitado = invitado
        this.cantidadAcompaniantesMaxima = unaCantidadAcompaniantesMaxima
        this.evento = unEvento
        this.estaPendiente = true
        // this.evento.agregarAsistente(this.invitado)
    }
    agregarListaAsistentesEventoCerrado() {
        console.log(this.invitado.nombre)
        this.evento.agregarAsistente(this.invitado)
    }

    confirmar(cantidadAcompaniantesInvitado: number): void {

        if (cantidadAcompaniantesInvitado <= this.cantidadAcompaniantesMaxima) {
            this.evento.confirmarUsuario(this.invitado)
            this.estaPendiente = false
        }
        else
            throw ("La cantidad de acompaniantes supera la maxima permitida en la invitacion")
    }

    rechazar() {
        this.estaPendiente = false
        console.log(this.estaPendiente)
        // this.evento.usuarioRechazaInvitacion(this.invitado)
    }

    // recibirNotificacionNuevaInvitacion(): void {
    //     this.evento.agregarUsuarioListaAsistentes(this.invitado)
    //     // println(invitado.nombreUsuario + " tiene una nueva invitacion para el evento " + evento.nombreEvento)
    // }
}