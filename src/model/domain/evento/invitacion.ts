import { Usuario } from "../usuario/usuario";
import { EventoCerrado } from "./eventoCerrado";

export class Invitacion {
    evento: EventoCerrado
    invitado: Usuario
    cantidadAcompaniantesMaxima: number
    cantidadAcompaniantesConfirmados: number
    // estaRechazado = false
    // estaConfirmado = false
    estaPendiente: boolean;

    constructor(invitado: Usuario, unEvento: EventoCerrado, unaCantidadAcompaniantesMaxima: number) {
        this.invitado = invitado
        this.cantidadAcompaniantesMaxima = unaCantidadAcompaniantesMaxima
        this.evento = unEvento
        this.estaPendiente = true
    }
    agregarListaAsistentesEventoCerrado(){
        this.evento.asistentes.push(this.invitado)      //agrega a la lista de asistentes posibles
    }
    
    confirmar(cantidadAcompaniantesInvitado: number): void {
        this.cantidadAcompaniantesConfirmados = cantidadAcompaniantesInvitado
        if (this.cantidadAcompaniantesConfirmados <= this.cantidadAcompaniantesMaxima) {
            this.evento.confirmarUsuario(this.invitado)
            this.estaPendiente = false
            console.log("estaPendiente = false")
        }
        else
            throw ("La cantidad de acompaniantes supera la maxima permitida en la invitacion")
    }

    rechazar(){
        this.estaPendiente = false
        this.evento.usuarioRechazaInvitacion(this.invitado)
    }

    // recibirNotificacionNuevaInvitacion(): void {
    //     this.evento.agregarUsuarioListaAsistentes(this.invitado)
    //     // println(invitado.nombreUsuario + " tiene una nueva invitacion para el evento " + evento.nombreEvento)
    // }
}