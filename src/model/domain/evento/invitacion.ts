import { Usuario } from "../usuario/usuario";
import { EventoCerrado } from "./eventoCerrado";
import { Locacion } from "./Locacion";

export class Invitacion {

    constructor(public invitado?: Usuario, public evento?: EventoCerrado, public cantidadAcompaniantesMaxima?: number) {
    }

    static fromJson(invJson) {
        const result: Invitacion = Object.assign(new Invitacion(), invJson)
        result.evento  = Object.assign(new EventoCerrado(), invJson.evento)
        // result.evento = invJson.fromJson(invJson.evento)// no funciona
        return result
    }

    // agregarListaAsistentesEventoCerrado() {
    //     console.log(this.invitado.nombre)
    //     this.evento.agregarAsistente(this.invitado)
    // }

    // confirmar(cantidadAcompaniantesInvitado: number): void {
    //     console.log(this)
    //     if (cantidadAcompaniantesInvitado > this.cantidadAcompaniantesMaxima) {
    //         throw ("La cantidad de acompaniantes supera la maxima permitida en la invitacion")
    //     }
    //     this.evento.confirmarUsuario(this.invitado) 
    // }

    // rechazar() {
    //     // this.estaPendiente = false
    //     // console.log(this.estaPendiente)
    //     this.evento.usuarioRechazaInvitacion(this.invitado)
    // }

    // recibirNotificacionNuevaInvitacion(): void {
    //     this.evento.agregarUsuarioListaAsistentes(this.invitado)
    //     // println(invitado.nombreUsuario + " tiene una nueva invitacion para el evento " + evento.nombreEvento)
    // }
}