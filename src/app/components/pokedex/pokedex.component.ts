import { Component } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
pokemons:Array<any> = new Array;
listaTipos:Array<any> = new Array;
  constructor(private consultaServicio:ConsultaApiService) {}

  ngOnInit() {
    this.getPokemons();
    this.getTypes();
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
  getTypes(){
      for (let i = 1; i < 10; i++) {
      this.consultaServicio.getPokemonById(i).subscribe(
        data => {
          this.listaTipos.push(data.types)

          // for (let i = 0; i < this.listaTipos.length; i++) {

              console.log(this.listaTipos);

          // }
        }
        )
      }
    }
  }

