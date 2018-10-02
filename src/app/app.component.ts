import { Component } from '@angular/core';
import { Usuario } from './usuario/usuario.domain'
import { Evento } from './evento/evento.domain'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  
  
  diego = new Usuario("Diego","profesional","diegazo@gmail.com",45,"C:\Users\Leo\Documents\eg-amigos-web-master\images\leo.jpg");
  carlo=new Usuario("Carlo","free","carlazo@gmail.com",124,"unLink")
  mario=  new Usuario("Mario","Profesional","mariazo@gmail.com",38,"unLink")
  


amigos=[
    this.diego,this.carlo,this.mario]
 

    evento=[
  new Evento("fiesta","palermo","Juan miranda"),
  new Evento("casamiento","san martin","Diego Marcone"),  
  new Evento("Cominion","Hurlingam","Maxy Carpato")  

]

}
