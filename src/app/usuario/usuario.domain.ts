import { Evento } from "../evento/evento.domain";


export class Usuario {


    nombre : string
    tipoDeUsuario : string
    mail : string
    cantidadSeguidores:number
    linkFoto:string
    amigos:Usuario[]
    eventos:Evento[]
    username:string
    constructor(nombre, tipoDeUsuario, mail,cantidadSeguidores,linkFoto,username) {
        this.nombre = nombre
        this.tipoDeUsuario = tipoDeUsuario
        this.mail = mail
        this.cantidadSeguidores=cantidadSeguidores
        this.linkFoto=linkFoto
        this.username=username
    }
    
//metodos

    
        
    

}