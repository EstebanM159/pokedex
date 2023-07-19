export interface Data{
  count: number,
  next: string,
  previous: string,
  results: Resultado[]
}

export interface Resultado {
  name: string,
  url: string,
}
// interfaces de tipos
export interface Tipos{
  cant:InfoTipos

}
export interface InfoTipos{
  slot:number,
  type:Resultado
}
export interface Resultado{
  name:string,
  url:string
}
