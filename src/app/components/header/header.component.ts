import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public pokemonName:string="";
   buscar(e:any){
    this.pokemonName = e.target.value;

  }
  onClick(){
    console.log(this.pokemonName)
  }
}


