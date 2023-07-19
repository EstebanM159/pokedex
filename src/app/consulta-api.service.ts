import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './models/pokeapi';


@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {
  urlByPage = 'https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20';
  constructor(private http: HttpClient) { }

  getPokemonByPage():Observable<Data>{
    return this.http.get<Data>(this.urlByPage);
  }
  getPokemonById(id:string){
     return this.http.get<Data>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
