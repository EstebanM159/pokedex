import { Component } from '@angular/core';
import { ConsultaApiService } from '../consulta-api.service';
import { PokemonClass } from '../models/pokemonClass';
@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
constructor(private pokemonService: ConsultaApiService) { }
  pokemon:any;
  ngOnInit() {
    this.pokemonService.getPokemonById(1).subscribe(
      ( data) => {
        // Aquí puedes trabajar con los datos del Pokémon obtenidos de la API
        this.pokemon =data;
        console.log(this.pokemon);
      }
    );
  }
}
