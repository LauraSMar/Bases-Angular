import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";



@Injectable()

export class DbzService {
    constructor () {
        console.log("On Init Service");
    }
    private _personajes: Personaje [] = [
        { nombre:"Goku",
          poder:12000
        },
        { nombre:"Pepe",
          poder:0
        },
      
        ];

        get personajes () : Personaje [] {
            return [...this._personajes];
        }
        

        agregarPersonaje (nuevo :Personaje) {
            this._personajes.push( nuevo);
        }


}