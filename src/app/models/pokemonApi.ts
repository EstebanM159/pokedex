export interface PokemonApi{
  count:number,
  next:string,
  previos:string,
  results:PokemonApiResults[]
}
export interface PokemonApiResults{
  id:number,
  name:string,
  url:string,
  height:number,
  order:number,
  weight:number,
  abilities:PokemonApiAbilities,
  moves:PokemonApiNameUrl,
  sprites:PokemonApiSprites

}
export interface PokemonApiNameUrl{
  name:string,
  url:string
}
export interface PokemonApiAbilities{
  is_hidden:boolean,
  slot:number,
  ability:PokemonApiNameUrl;
}
export interface PokemonApiSprites{
   back_default: string,
    back_female: string,
    back_shiny: string,
    back_shiny_female: null,
    front_default: string,
    front_female: string,
    front_shiny: string,
    front_shiny_female: string
}
