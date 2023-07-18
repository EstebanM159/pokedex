import { Component, Input, OnChanges } from '@angular/core';
import { InfoTipos, Tipos } from 'src/app/models/pokemonApi';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent{
  @Input() name: string="";
  @Input() img: string="";
  @Input()tipo : InfoTipos[]=[];
  public clase:string='';

  color(tipo:string):string{
    let clase:string="";
    switch (tipo) {
      case 'fire':
        clase = 'bg-fuego';
        break;
      case 'grass':
        clase = 'bg-grass';
      break;
      case 'flying':
        clase = 'bg-flying';
      break;
      case 'electric':
        clase = 'bg-electric';
      break;
      case 'poison':
        clase = 'bg-poisson';
      break;
      case 'water':
        clase = 'bg-water';
      break;
      case 'flighting':
        clase = 'bg-flighting';
      break;
      case 'normal':
        clase = 'bg-normal';
      break;
      default:
        break;
    }
    return clase;
  }

}
