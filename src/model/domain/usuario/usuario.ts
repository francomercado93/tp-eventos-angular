import { Invitacion } from "../evento/invitacion";
import { Entrada } from "../evento/entrada";
import { Evento } from "../evento/evento";
import { EventoAbierto } from "../evento/EventoAbierto";
import { EventoCerrado } from "../evento/eventoCerrado";
import { Testability } from "@angular/core";
import { fechaHoy } from "src/services/eventos.service";


export class Usuario {
    
    amigos: Array<Usuario> = []
    invitaciones: Array<Invitacion> = []
    entradasCompradas: Array<Entrada> = []
    eventosOrganizados: Array<Evento> = []
    
    constructor(public id?: number, private nombre?: string, private apellido?: string, public nombreUsuario?: string, private mail?: string, public tipoUsuario?: TipoUsuario, public fechaHoraActual?: Date) {
        // this.fechaHoraActual = fechaHoy()
    }
    crearEvento(evento: EventoCerrado): any {
        this.eventosOrganizados.push(evento)
    }

    toJSON(): any {
        const result: any = Object.assign({}, this)
        return result
    }

    static fromJson(usuarioJson) {
        const result: Usuario = Object.assign(new Usuario(), usuarioJson) //verificar
        this.asignarTipoUsuario(usuarioJson, result)
        result.fechaHoraActual = fechaHoy()
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
    get cantidadAmigos() {
        return this.amigos.length
    }

    eliminarAmigo(amigo: Usuario) {
        this.amigos.splice(this.amigos.indexOf(amigo), 1)
    }
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
