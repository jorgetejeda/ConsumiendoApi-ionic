import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PokeApiServiceProvider } from '../../providers/poke-api-service/poke-api-service';

/**
 * Generated class for the PokeApiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-poke-api',
  templateUrl: 'poke-api.html',
})
export class PokeApiPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public pokeService: PokeApiServiceProvider) {
  }

  pokemons: {
    name?: string;
    sprites?: string[];
  }[] = [];
  

  getPokemons(pokemonsCount = 5) {
    this.pokemons = [];
    for (let index = 1; index <= pokemonsCount; index++) {
      this.pokeService.getPokemonsData(index.toString()).subscribe(
        (data) => {
          this.pokemons.push(data);
        },
        (error) => {
          console.error(error);
        }
      )
    }
  }

  ionViewDidLoad() {
    this.getPokemons();
  }
}
