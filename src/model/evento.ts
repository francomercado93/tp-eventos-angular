export class Evento {
    nombreEvento: string
    inicioEvento: Date
    locacion: string
    organizador: string
    constructor(nombre, fechaInicio, lugar, organizadorEvento) {
        this.nombreEvento = nombre;
        this.inicioEvento = fechaInicio;
        this.locacion = lugar;
        this.organizador = organizadorEvento
    }
}
