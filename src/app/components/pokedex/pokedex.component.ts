import { Component } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';

import { Data, Resultado } from 'src/app/models/pokeapi';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  pokemons:Resultado[]=[];

  constructor(private consultaServicio:ConsultaApiService) {}

  ngOnInit() {
    this.cargarLista();

  }

  cargarLista(){
      this.consultaServicio.getPokemonByPage().subscribe(info=>{
          this.pokemons  = info.results
       } )
      }

}





