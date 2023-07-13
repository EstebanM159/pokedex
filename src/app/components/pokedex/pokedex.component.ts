import { Component } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
pokemons:Array<any> = new Array;
  constructor(private consultaServicio:ConsultaApiService) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(){
    for (let i = 1; i < 50; i++) {
      this.consultaServicio.getPokemonById(i).subscribe(
        data => {
          this.pokemons.push(data);
        }
        )

        console.log(this.pokemons);
      }
  }
}
