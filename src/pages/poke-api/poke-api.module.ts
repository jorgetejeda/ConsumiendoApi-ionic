import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PokeApiPage } from './poke-api';

@NgModule({
  declarations: [
    PokeApiPage,
  ],
  imports: [
    IonicPageModule.forChild(PokeApiPage),
  ],
})
export class PokeApiPageModule {}
