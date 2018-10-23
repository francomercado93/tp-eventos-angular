import { Invitacion } from "../evento/invitacion";
import { Entrada } from "../evento/entrada";


export class Usuario {
    nombre: string
    apellido: string
    username: string
    tipoUsuario: string //agregar tipos
    email: string
    amigos: Array<Usuario> = []
    invitaciones: Array<Invitacion> = []
    entradasCompradas: Array<Entrada> = []
    
    constructor(nombre: string, apellido: string, username: string, email: string) {
        this.nombre = nombre
        this.apellido = apellido
        this.username = username
        this.email = email
    }

    // agregarAmigos(amigo: Usuario) {
    //     this.amigos.push(amigo)
    // }

    recibirInvitacion(unaInvitacion: Invitacion){
		this.invitaciones.push(unaInvitacion)
	}
}
