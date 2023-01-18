import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../types/pokemon';
import { PokemonList } from '../types/pokemon-list';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl!: string;

  constructor(public http: HttpClient) {
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
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
}
