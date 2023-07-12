import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { PokemonApi, PokemonApiResults,PokemonApiSprites } from './models/pokemonApi';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {
  url = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

  getPokemons() :Observable<PokemonApiResults[]>{
  return this.http.get<PokemonApi>(this.url)
    .pipe(map((apiResult)=>apiResult.results));
  }



  // }
}
