import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonClass } from './models/pokemonClass';
@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {
  url = 'https://pokeapi.co/api/v2';
  constructor(private http: HttpClient) { }

  getPokemonById(id: number) {
  return this.http.get<PokemonClass>(`${this.url}/pokemon/${id}`);
}
}
