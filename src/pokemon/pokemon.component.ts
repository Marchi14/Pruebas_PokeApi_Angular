import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokeApiService } from '../pokeapi.service';
import { Poke } from './poke';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css'],
  providers: [PokeApiService],
  imports: [CommonModule, HttpClientModule],
})
export class PokemonComponent implements OnInit {
  _pokemons: Array<Poke> = [];

  constructor(private api_call: PokeApiService) {}

  public getPokemons() {
    return this._pokemons;
  }

  public addPokemon(pokemon: Poke) {
    this._pokemons.splice(pokemon.getId() - 1, 0, pokemon);
  }

  ngOnInit(): void {
    var aux_this = this;
    var aux_api = this.api_call;
    this.api_call.sendGetRequest('?limit=10&offset=0').subscribe((data) =>
      data['results'].forEach(function (element) {
        aux_api.sendGetRequestFull(element.url).subscribe((data) => {
          let pokemon = new Poke();
          pokemon.setId(data['id']);
          pokemon.setName(data['name']);
          pokemon.setImage(data['sprites'].front_default);
          pokemon.setWeight(data['weight']);
          pokemon.setHeight(data['height']);
          data['types'].forEach(function (t) {
            pokemon.addType(t.type.name);
          });
          aux_this.addPokemon(pokemon);
        });
      })
    );
  }
}
