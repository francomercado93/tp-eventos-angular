import { Usuario } from "../usuario/usuario";
import { Locacion } from "./Locacion";
import { fechaHoy } from "src/services/eventos.service";

export class Evento {
    
    constructor(public nombreEvento?: String, public capacidadMaxima?: number, public rechazados?: number, public locacion?: Locacion, public fechaCreacion?: Date,
        public finEvento?: Date, public organizadorEvento?: String, public inicioEvento?: Date, public cantidadAsistentesPosibles?: number,
        public fechaMaximaConfirmacion?: Date) {
            
        }
   
    initialize(): any {
        this.capacidadMaxima = 0
        this.cantidadAsistentesPosibles = 0
        this.rechazados = 0
    }

    validarFechas() {
        if (this.finEvento < this.inicioEvento)
            throw ("La fecha de finalizacion del evento debe ser mayor a la del inicio del evento")
        if (this.fechaMaximaConfirmacion > this.inicioEvento)
            throw ("La fecha maxima de confirmacion no debe superar a la fecha de inicio")
    }

    tipoUsuarioPuedeOrganizar(): any {
        return true
    }

    static fromJson(eventoJson) {
        const result: Evento = Object.assign(new Evento(), eventoJson)
        result.inicioEvento = new Date(eventoJson.inicioEvento)
        result.inicioEvento = new Date(eventoJson.finEvento)
        result.inicioEvento = new Date(eventoJson.fechaCreacion)
        result.inicioEvento = new Date(eventoJson.fechaMaximaConfirmacion)
        return result
    }

    toJSON(): any {
        const result: any = Object.assign({}, this)
        console.log(result)
        const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
        result.inicioEvento = this.inicioEvento.toLocaleString('es-GB', options)
        result.finEvento = this.finEvento.toLocaleString('es-GB', options)
        result.fechaMaximaConfirmacion = this.fechaMaximaConfirmacion.toLocaleString('es-GB', options)
        result.fechaCreacion = this.fechaCreacion.toLocaleString('es-GB', options)
        result.locacion = this.locacion.descripcion
        return result
    }

    usuarioEstaATiempo(unUsuario: Usuario) {
        return unUsuario.fechaHoraActual < (this.fechaMaximaConfirmacion)
    }

    // removerUsuario(unUsuario: Usuario): void {
    //     this.asistentes.splice(this.asistentes.indexOf(unUsuario), 1)
    // }

    cantidadDisponibles() { // Eventos abiertos => entradas, cerrados => invitaciones
        return 5
        // (this.capacidadMaxima() - this.cantidadAsistentesPosibles)
    }

    // capacidadMaxima() {
    // 	locacion.calcularCapacidad(ESPACIONECESARIOPERSONA)
    // 	locacion.capacidad
    // }
}
