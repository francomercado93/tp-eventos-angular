import { Invitacion } from "../evento/invitacion";
import { Entrada } from "../evento/entrada";
import { Evento } from "../evento/evento";
import { EventoAbierto } from "../evento/EventoAbierto";
import { EventoCerrado } from "../evento/eventoCerrado";
import { fechaHoy } from "src/app/services/eventos.service";
import { Testability } from "@angular/core";


export class Usuario {

    amigos: Array<Usuario> = []
    invitaciones: Array<Invitacion> = []
    entradasCompradas: Array<Entrada> = []
    fechaHoraActual: Date;
    eventosOrganizados: Array<Evento> = []

    constructor(public id?: number, private nombre?: string, private apellido?: string, private nombreUsuario?: string, private mail?: string, public tipoUsuario?: TipoUsuario) {
        this.fechaHoraActual = fechaHoy()
    }

    toJSON(): any {
        const result: any = Object.assign({}, this)
        return result
    }

    static fromJson(usuarioJson) {
        const result: Usuario = Object.assign(new Usuario(), usuarioJson) //verificar
        this.asignarTipoUsuario(usuarioJson, result)
        return result
    }


    static asignarTipoUsuario(usuarioJson, result) {
        if (usuarioJson.tipoUsuario == "Free")
            result.tipoUsuario = new Free()
        if (usuarioJson.tipoUsuario == "Amateur")
            result.tipoUsuario = new Amateur()
        if (usuarioJson.tipoUsuario == "Profesional")
            result.tipoUsuario = new Profesional()
    }

    // recibirInvitacion(unaInvitacion: Invitacion) {
    //     this.invitaciones.push(unaInvitacion)
    //     unaInvitacion.agregarListaAsistentesEventoCerrado
    // }
    get cantidadAmigos() {
        return this.amigos.length
    }

    eliminarAmigo(amigo: Usuario) {
        this.amigos.splice(this.amigos.indexOf(amigo), 1)
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

export interface TipoUsuario {
    descripcion: string
}

export class Free implements TipoUsuario {
    descripcion: string;
    constructor() {
        this.descripcion = "Free"
    }
}
export class Amateur implements TipoUsuario {
    descripcion: string;
    constructor() {
        this.descripcion = "Amateur"
    }
}
export class Profesional implements TipoUsuario {
    descripcion: string;
    constructor() {
        this.descripcion = "Profesional"
    }
}
