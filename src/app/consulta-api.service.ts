import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './models/pokeapi';
import { Pokemon } from './models/pokemon';
import { catchError } from 'rxjs/operators';
import { throwError as observableThrowError } from 'rxjs';
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
  getPokemonByName(nombre:string){
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .pipe(
        catchError(this.errorHandler)
      );
  }

  errorHandler(error:HttpErrorResponse){
    return observableThrowError(error.status);
  }
}
