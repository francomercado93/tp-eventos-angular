import { Invitacion } from "../evento/invitacion";
import { Entrada } from "../evento/entrada";
import { Evento } from "../evento/evento";
import { EventoAbierto } from "../evento/EventoAbierto";
import { EventoCerrado } from "../evento/eventoCerrado";
import { fechaHoy } from "src/app/services/eventos.service";


export class Usuario {

    nombre: string
    apellido: string
    username: string
    tipoUsuario: string //agregar tipos
    email: string
    amigos: Array<Usuario> = []
    invitaciones: Array<Invitacion> = []
    entradasCompradas: Array<Entrada> = []
    fechaHoraActual: Date;

    constructor(nombre: string, apellido: string, username: string, email: string) {
        this.nombre = nombre
        this.apellido = apellido
        this.username = username
        this.email = email
        this.fechaHoraActual = fechaHoy()
    }

    recibirInvitacion(unaInvitacion: Invitacion) {
        this.invitaciones.push(unaInvitacion)
        unaInvitacion.agregarListaAsistentesEventoCerrado
    }

    // agregarAmigos(amigo: Usuario) {
    //     this.amigos.push(amigo)
    // }

    // confirmarInvitacion(invitacion: Invitacion): any {
    //     var unaInvitacion = this.getEventoDeInvitacion(unEvento)
    //     if (unaInvitacion === null) {
    //         throw ("No estas invitado a este evento")
    //     }
    //     unaInvitacion.confirmar(cantidadAcompaniantesConfirmados)
    // }
    // getEventoDeInvitacion(unEvento: EventoCerrado): any {
    //     this.invitaciones.find(invitacion => invitacion.evento == unEvento)//obtengo la invitacion con el evento
    // }
    // }

    // comprarEntrada(unEvento: EventoAbierto) {	
    // 	if(!unEvento.cumpleCondiciones(this)){
    // 		throw ("Error: no se puede comprar entrada")
    // 	}
    // 	// this.pagarConTarjeta(unEvento)
    // 	unEvento.agregarUsuarioListaAsistentes(this)

    // }
}
