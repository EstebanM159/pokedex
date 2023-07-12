import { Component } from '@angular/core';
import { ConsultaApiService } from '../consulta-api.service';
import { PokemonApiResults } from '../models/pokemonApi';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  pokemons$:Observable<PokemonApiResults[]>
  constructor(consultaServicio:ConsultaApiService) {
    this.pokemons$ = consultaServicio.getPokemons();
    console.log(this.pokemons$)
  }

}
