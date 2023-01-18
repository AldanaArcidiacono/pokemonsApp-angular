import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonList } from '../types/pokemons';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl!: string

  constructor(public http: HttpClient) {
    this.apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'
   }

   getPokemons(): Observable<PokemonList>{
    const httpOptions = {
      method: 'GET',
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get<PokemonList>(this.apiUrl, httpOptions)
   }
}
