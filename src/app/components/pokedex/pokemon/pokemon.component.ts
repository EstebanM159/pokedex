import { Component, Input, OnChanges } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
import { InfoTipos, Tipos,Resultado } from 'src/app/models/pokeapi';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnChanges {
  ngOnChanges(){
    this.extraerInfo();
    this.getById();
  }
  constructor ( private consultaServicio:ConsultaApiService){}
  @Input() data?:Resultado;
  // @Input() name: string="";
  // @Input() img: string="";
  @Input() pokemon?:Pokemon;
  id:string="0";
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
  extraerInfo(){
    if(this.data){
      this.id = this.data.url.substring(34,this.data.url.length-1);
    }
  }
  getById(){
    this.consultaServicio.getPokemonById(this.id).subscribe(info=>{
      console.log(info);
    })
    //tengo que acceder a los tipos desde aca!!!!

  }

}
