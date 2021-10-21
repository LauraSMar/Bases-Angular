import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes:string[] =["Wonderwoman","Supergirl","Spiderman","Flash","Superman"];
  heroeBorrado:string = "";
  
 
 borrarHeroe():string{
   
   return this.heroeBorrado =this.heroes.shift()|| "";
 /*  this.heroeBorrado=this.heroes[1];
  this.heroes=this.heroes.splice(1,this.heroes.length); */
  
  

 }

}
