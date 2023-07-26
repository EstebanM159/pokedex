import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ConsultaApiService } from 'src/app/consulta-api.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (private consultaService : ConsultaApiService ){}
 errorMessage: string = "";
  public pokemonName:string="";
  buscar(e:any){
    this.pokemonName = e.target.value;

  }
  onClick(){
    this.consultaService.getPokemonByName(this.pokemonName).subscribe(data=>{
      console.log(data)
    })
  }
}


