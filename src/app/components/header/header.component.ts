import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
import { Pokemon } from 'src/app/models/pokemon';
import { Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (private consultaService : ConsultaApiService ){}
  @Input() activo:boolean=false;
  pokemonBuscado?:Pokemon;
 errorMessage: string = "";
  public pokemonName:string="";
  buscar(e:any){
    this.pokemonName = e.target.value;
  }
  onClick(){
    this.consultaService.getPokemonByName(this.pokemonName).subscribe(data=>{
      this.pokemonBuscado=data
    }
      ,
      (error=> {if(error===404)
        this.errorMessage = "No se encontro el pokemon"
        return this.errorMessage;
      }
      )
    )
  }
}


