import { Evento } from "../evento/evento.domain";


export class Usuario {


    nombre : string
    tipoDeUsuario : string
    mail : string
    cantidadSeguidores:number
    linkFoto:string
    amigos:Usuario[]
    eventos:Evento[]

    constructor(nombre, tipoDeUsuario, mail,cantidadSeguidores,linkFoto) {
        this.nombre = nombre
        this.tipoDeUsuario = tipoDeUsuario
        this.mail = mail
        this.cantidadSeguidores=cantidadSeguidores
        this.linkFoto=linkFoto
        
    }
    
//metodos

    
        
    

}