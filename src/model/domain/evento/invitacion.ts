import { Usuario } from "../usuario/usuario";
import { EventoCerrado } from "./eventoCerrado";

export class Invitacion {
    evento: EventoCerrado
    invitado: Usuario
    cantidadAcompaniantesMaxima: number
    cantidadAcompaniantesConfirmados: number
    //boolean estaConfirmado = false
    //boolean estaRechazado = false

    constructor(invitado: Usuario, unEvento: EventoCerrado, unaCantidadAcompaniantesMaxima: number) {
        this.invitado = invitado
        this.cantidadAcompaniantesMaxima = unaCantidadAcompaniantesMaxima
        this.evento = unEvento
    }

    confirmar(cantidadAcompaniantesInvitado: number): void {
        this.cantidadAcompaniantesConfirmados = cantidadAcompaniantesInvitado	//guardo la cantidad en una variable de invitacion
        if (this.cantidadAcompaniantesConfirmados <= this.cantidadAcompaniantesMaxima) {
            //estaConfirmado = true
            // this.evento.confirmarUsuario(this.invitado)
        }
        else
            throw ("La cantidad de acompaniantes supera la maxima permitida en la invitacion")
    }

    // rechazar(): void {
    //     //estaRechazado = true
    //     this.evento.usuarioRechazaInvitacion(this.invitado)
    // }

    // recibirNotificacionNuevaInvitacion(): void {
    //     this.evento.agregarUsuarioListaAsistentes(this.invitado)
    //     // println(invitado.nombreUsuario + " tiene una nueva invitacion para el evento " + evento.nombreEvento)
    // }
}