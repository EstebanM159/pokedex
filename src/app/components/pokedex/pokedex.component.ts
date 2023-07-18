import { Component } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
import { Tipos } from 'src/app/models/pokemonApi';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
pokemons:Array<any> = new Array;
listaTipos:Tipos[] =[];
  constructor(private consultaServicio:ConsultaApiService) {}

  ngOnInit() {
    this.getPokemons();

  }

  getPokemons(){
    for (let i = 1; i < 10; i++) {
      this.consultaServicio.getPokemonById(i).subscribe(
        data => {
          // console.log(data.types);
          this.pokemons.push(data);
        }
        )
      }

    }

  }

