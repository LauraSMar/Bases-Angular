import { Component } from "@angular/core";
@Component({
    selector:'contador-app',
    templateUrl:'contador.component.html'

})

export class contadorComponent{
    title:string = 'Contador ';
    numero:number = 55;
    base:number =5;
    acumular(valor:number){
      this.numero+=valor;
    }
}

