import { Usuario } from "../usuario/usuario";

export class Evento {
    nombreEvento: string
    inicioEvento: Date
    locacion: string
    organizador: Usuario
    fechaMaximaConfirmacion: Date;
    asistentes: Array<Usuario>;

    constructor(nombre, fechaInicio, lugar, organizadorEvento) {
        this.nombreEvento = nombre;
        this.inicioEvento = fechaInicio;
        this.locacion = lugar;
        this.organizador = organizadorEvento
    }
    verdad: boolean = true
  
    usuarioEstaATiempo(unUsuario: Usuario) {
        return unUsuario.fechaHoraActual < (this.fechaMaximaConfirmacion)
    }
    
    removerUsuario(unUsuario: Usuario) { //no funciona
        let indexUsr = this.asistentes.indexOf(unUsuario)
        this.asistentes.splice(indexUsr, 1) 
    }
    // cantidadDisponibles() { // Eventos abiertos => entradas, cerrados => invitaciones
    //     (this.capacidadMaxima() - this.cantidadAsistentesPosibles)
    // }

    // capacidadMaxima() {
    // 	locacion.calcularCapacidad(ESPACIONECESARIOPERSONA)
    // 	locacion.capacidad
    // }
}
