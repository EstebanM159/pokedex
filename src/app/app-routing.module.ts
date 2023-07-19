import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonDetailsComponent } from './components/pokedex/pokemon-details/pokemon-details.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'pokedex',
    component:PokedexComponent
  },{
    path:'pokemon-details/:id',
    component:PokemonDetailsComponent
  },
  {
    path:'pokemon-details',
    component:PokemonDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
