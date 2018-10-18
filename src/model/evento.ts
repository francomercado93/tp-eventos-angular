export class Evento {
    nombreEvento: string
    // inicioEvento: Date fechaInicio
    locacion: string
    organizador: string
    constructor(nombre,  lugar, organizadorEvento) {
        this.nombreEvento = nombre;
        // this.inicioEvento = fechaInicio;
        this.locacion = lugar;
        this.organizador = organizadorEvento
    }
}
