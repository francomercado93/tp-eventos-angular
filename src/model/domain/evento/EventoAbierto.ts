import { Evento } from "./evento";
import { Usuario } from "../usuario/usuario";

export class EventoAbierto extends Evento{
    constructor(){
        super()
    }
    // cumpleCondiciones(unUsuario: Usuario): boolean {
	// 	(this.superaEdadMin(unUsuario) && this.cantidadDisponibles > 0 && this.usuarioEstaATiempo(unUsuario))
    // }
    // superaEdadMin(unUsuario: Usuario): boolean {
	// 	unUsuario.edad >= this.edadMinima
	// }
}
