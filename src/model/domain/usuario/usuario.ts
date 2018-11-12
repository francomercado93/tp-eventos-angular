import { fechaHoy } from "src/services/eventos.service";
import { Evento } from "../evento/evento";
import { EventoCerrado } from "../evento/eventoCerrado";
import { Invitacion } from "../evento/invitacion";


export class Usuario {

    amigos: Array<Usuario> = []
    invitacionesPendientes: Array<Invitacion> = []
    eventosOrganizados: Array<Evento> = []

    constructor(public id?: number, private nombre?: string, private apellido?: string, public nombreUsuario?: string, private mail?: string, public tipoUsuario?: TipoUsuario, public fechaHoraActual?: Date) {
        this.fechaHoraActual = fechaHoy()
    }

    agregarAmigo(amigo: Usuario) {
        this.amigos.push(amigo)
    }

    cantidadEventosSimultaneos(): any {
        return this.eventosOrganizados.filter(evento => evento.fechaCreacion.getMonth == this.fechaHoraActual.getMonth
            || evento.finEvento.getMonth == this.fechaHoraActual.getMonth).length
    }

    puedoCrearEvento(evento: Evento): any {
        this.tipoUsuario.puedoOrganizarEvento(this, evento)
    }

    cantidadEventosOrganizadosMes() {
        return this.eventosOrganizados.filter(evento => evento.fechaCreacion.getMonth == this.fechaHoraActual.getMonth
            || evento.finEvento.getMonth == this.fechaHoraActual.getMonth).length
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
        result.fechaHoraActual = fechaHoy()
        return result
    }

    static asignarTipoUsuario(usuarioJson) {
        if (usuarioJson.tipoUsuario == "Free")
            return new Free()
        if (usuarioJson.tipoUsuario == "Amateur")
            return new Amateur()
        if (usuarioJson.tipoUsuario == "Profesional")
            return new Profesional()
    }
    get cantidadAmigos() {
        return this.amigos.length
    }

    eliminarAmigo(amigo: Usuario) {
        this.amigos.splice(this.amigos.indexOf(amigo), 1)
    }
}

export interface TipoUsuario {
    descripcion: String

    puedoOrganizarEvento(usuario: Usuario, evento: Evento)

    maximaCantidadEventosSimultaneos()

    maximaCantidadEventosPorMes()

}

export class Free implements TipoUsuario {

    descripcion: String

    constructor() {
        this.descripcion = "Free"
    }

    puedoOrganizarEvento(usuario: Usuario, evento: Evento) {
        evento.tipoUsuarioPuedeOrganizar() && (usuario.cantidadEventosOrganizadosMes() < this.maximaCantidadEventosPorMes()) &&
            (usuario.cantidadEventosSimultaneos() == this.maximaCantidadEventosSimultaneos())
    }

    maximaCantidadEventosSimultaneos() {
        return 0
    }

    maximaCantidadEventosPorMes() {
        return 3
    }
}
export class Amateur implements TipoUsuario {

    descripcion: String;

    constructor() {
        this.descripcion = "Amateur"
    }

    maximaCantidadEventosSimultaneos() {
        5
    }
    maximaCantidadEventosPorMes() {
        0
    }
    puedoOrganizarEvento(usuario: Usuario, evento: Evento) {
        usuario.cantidadEventosSimultaneos() < this.maximaCantidadEventosSimultaneos
    }
}
export class Profesional implements TipoUsuario {

    descripcion: String;

    constructor() {
        this.descripcion = "Profesional"
    }

    puedoOrganizarEvento(usuario: Usuario, evento: Evento) {
        usuario.cantidadEventosOrganizadosMes() < this.maximaCantidadEventosPorMes() &&
            (usuario.cantidadEventosSimultaneos() < this.maximaCantidadEventosSimultaneos())
    }

    maximaCantidadEventosSimultaneos() {
        return 20
    }
    maximaCantidadEventosPorMes() {
        return 20
    }
}
