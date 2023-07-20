import { Component, Input,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConsultaApiService } from 'src/app/consulta-api.service';
import { Resultado } from 'src/app/models/pokeapi';
import { Pokemon } from 'src/app/models/pokemon';
import { Stat } from 'src/app/models/pokemon';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit{
  @Input() data?:Resultado;
  stats ?:Stat[];
  unPokemon?:Pokemon;
  id:string="0";
  constructor(private consultaServicio:ConsultaApiService, private rutaActiva:ActivatedRoute){

  }
  ngOnInit() {
    this.id = this.rutaActiva.snapshot.params['id'];
    this.getById();
  }
//muestra la id pero no los datos de la misma!!!!!!!!!!!!
  getById(){
    this.consultaServicio.getPokemonById(this.id).subscribe(info=>{
      console.log(info);
      this.unPokemon = info;
      this.stats=this.unPokemon.stats;
      console.log(this.stats)
    })
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

}
