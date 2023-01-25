import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../types/pokemon';
import { PokemonList } from '../types/pokemon-list';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl: string;
  pageCounter: number = 0;
  pokesCounter: number = 10;

  constructor(public http: HttpClient) {
    this.apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${this.pageCounter}&limit=${this.pokesCounter}`;
  }

  getPokemons(): Observable<PokemonList> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<PokemonList>(this.apiUrl, httpOptions);
  }

  getAllPokemons(pokeUrl: string): Observable<Pokemon> {
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };

    return this.http.get<Pokemon>(pokeUrl, httpOptions);
  }

  getNextUrlPokemons(): Observable<Pokemon> {
    for (let i = 0; i < 20; i++) {
      this.pageCounter++;
    }

    this.apiUrl = `https://pokeapi.co/api/v2/pokemon?offset=${this.pageCounter}&limit=${this.pokesCounter}`;
    this.getPokemons();
    return this.http.get<Pokemon>(this.apiUrl);
  }
}
