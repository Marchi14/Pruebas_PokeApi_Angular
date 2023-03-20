import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, PokemonComponent],
  template: `<div class="container"><app-pokemon class="row"></app-pokemon></div>`,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App).catch((err) => console.error(err));
