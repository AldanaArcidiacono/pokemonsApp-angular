import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from 'src/app/types/pokemon';
import { PokemonList } from 'src/app/types/pokemon-list';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
})
export class PokemonsComponent {
  pokemonList!: PokemonList;
  pokemons: Array<Pokemon> = [];

  constructor(public pokeService: ApiService) {}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      this.pokemonList = data;

      for (let i = 0; i < data.results.length; i++) {
        this.pokeService
          .getAllPokemons(data.results[i].url)
          .subscribe((data) => {
            this.pokemons.push(data as Pokemon);
            this.pokemons.sort((a,b) => a.id - b.id)
          });
      }
    });
  }
}
