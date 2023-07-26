import { Component,Input, OnInit } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
import { Resultado } from 'src/app/models/pokeapi';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent  {
  @Input() pokemonName?:string;
  pokemons:Resultado[]=[];
  constructor(private consultaServicio:ConsultaApiService) {}
  pagina:number=1;
  ngOnInit() {
    this.cargarLista();
  }

  cargarLista(){
    this.consultaServicio.getPokemonByPage(this.pagina).subscribe(info=>{
      this.pokemons  = info.results;
      this.pagina++;

    } )
  }

}





