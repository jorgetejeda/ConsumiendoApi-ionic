import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PokeApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PokeApiServiceProvider {

  constructor(public http: HttpClient) { }

  getPokemonsData(pokemonNumber:string){
    return this.http.get("https://pokeapi.co/api/v2/pokemon-form/"+pokemonNumber);
  }
}
