import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";

export class EventoAbierto extends Evento {

    constructor() {
        super()
    }

    tipoUsuarioPuedeOrganizar() {
        return false
    }
}
