import 'zone.js/dist/zone';
//import { enableProdMode } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { bootstrapApplication } from '@angular/platform-browser';
/*
if (true) {
  enableProdMode();
}
*/
@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  template: `<div class="container"><app-pokemon></app-pokemon></div>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App).catch((err) => console.error(err));
