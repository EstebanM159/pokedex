import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './models/pokeapi';
import { Pokemon } from './models/pokemon';


@Injectable({
  providedIn: 'root'
})
export class ConsultaApiService {

  constructor(private http: HttpClient) { }

  getPokemonByPage(page:number,size:number=40):Observable<Data>{
    const offset= size*(page-1);
    return this.http.get<Data>(`https://pokeapi.co/api/v2/pokemon/?limit=${size}&offset=${offset}`);
  }
  getPokemonById(id:string){
     return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
