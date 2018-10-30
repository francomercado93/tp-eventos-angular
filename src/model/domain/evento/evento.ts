import { Usuario } from "../usuario/usuario";
import { Locacion } from "./Locacion";

export class Evento {

    constructor(public nombreEvento?: String, public inicioEvento?: Date, public fechaMaximaConfirmacion?: Date, public finEvento?: Date, public locacion?: Locacion,
        public organizadorEvento?: Usuario, public asistentes?: Array<Usuario>, public rechazados?: number, public cantidadAsistentesPosibles?: number) {
        this.inicioEvento = new Date()
        this.finEvento = new Date()
        this.fechaMaximaConfirmacion = new Date()
    }

    static fromJson(eventoJson) {
        const result: Evento = Object.assign(new Evento(), eventoJson)
        result.locacion = Object.assign(new Locacion(), eventoJson.locacion)
        // result.locacion = eventoJson.fromJson(eventoJson.locacion)//No funciona
        return result
    }

    toJSON(): any {
        const result: any = Object.assign({}, this)
        return result
    }

    usuarioEstaATiempo(unUsuario: Usuario) {
        console.log(unUsuario.fechaHoraActual)
        console.log(this.fechaMaximaConfirmacion)
        return unUsuario.fechaHoraActual < (this.fechaMaximaConfirmacion)
    }

    removerUsuario(unUsuario: Usuario): void {
        this.asistentes.splice(this.asistentes.indexOf(unUsuario), 1)
    }

    cantidadDisponibles() { // Eventos abiertos => entradas, cerrados => invitaciones
        return 5
        // (this.capacidadMaxima() - this.cantidadAsistentesPosibles)
    }

    // capacidadMaxima() {
    // 	locacion.calcularCapacidad(ESPACIONECESARIOPERSONA)
    // 	locacion.capacidad
    // }
}
