import { Component, Input, OnChanges } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
import { Resultado } from 'src/app/models/pokeapi';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnChanges {
  constructor ( private consultaServicio:ConsultaApiService){}
  @Input() data?:Resultado;
  unPokemon?: Pokemon;
  id:string="0";
  public clase:string='';
  ngOnChanges(){
    this.extraerInfo();
    this.getById();
  }
  color(tipo:string):string{
    let clase:string="";
    switch (tipo) {
      case 'normal':
        clase = 'bg-normal info';
      break;
      case 'fire':
        clase = 'bg-fuego info';
        break;
        case 'flighting':
          clase = 'bg-flighting info';
        break;
        case 'water':
          clase = 'bg-water info';
        break;
        case 'flying':
          clase = 'bg-flying info';
        break;
      case 'grass':
        clase = 'bg-grass info';
      break;
      case 'poison':
        clase = 'bg-poisson info';
      break;
      case 'electric':
        clase = 'bg-electric info';
      break;
      case 'ground':
        clase = 'bg-ground info';
      break;
      case 'pyschic':
        clase = 'bg-pyschic info';
      break;
      case 'rock':
        clase = 'bg-rock info';
      break;
      case 'ice':
        clase = 'bg-ice info';
      break;
      case 'bug':
        clase = 'bg-bug info';
      break;
      case 'dragon':
        clase = 'bg-dragon info';
      break;
      case 'ghost':
        clase = 'bg-ghost info';
      break;
      case 'dark':
        clase = 'bg-dark info';
      break;
      case 'steel':
        clase = 'bg-steel info';
      break;
      case 'fairy':
        clase = 'bg-fairy info';
      break;
      default:
        break;
    }
    return clase;
  }
  //con esto saco la id
  extraerInfo(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1);
    }
  }
  //Sirve para sacar los atributos de cada pokemon
  getById(){
    this.consultaServicio.getPokemonById(this.id).subscribe(info=>{
      this.unPokemon = info;
    })

  }


}
