import { Component, Input, OnChanges } from '@angular/core';
import { InfoTipos, Tipos } from 'src/app/models/pokemonApi';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnChanges{
  @Input() name: string="";
  @Input() img: string="";
  @Input()tipo : InfoTipos[]=[];
  public clase:string='';
  ngOnChanges() {
    this.clase = this.cambiarClase();
    // console.log(this.tipo[0].type);
    //Toma el primer tipo y la cambia la clase a los dos tipo :C
  }
  cambiarClase(){
    let clase:string="";
    this.tipo.forEach( e => {
      console.log(e.type.name)

      switch (e.type.name) {
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
    });
    return clase;

  }
}
