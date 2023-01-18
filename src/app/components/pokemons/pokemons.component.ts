import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { PokemonList } from 'src/app/types/pokemons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html'
})
export class PokemonsComponent {
  pokemonList!: PokemonList;

  constructor(public pokeService: ApiService){}

  ngOnInit(): void {
    this.pokeService.getPokemons().subscribe((data) => {
      this.pokemonList = data;
    })
  }
}
