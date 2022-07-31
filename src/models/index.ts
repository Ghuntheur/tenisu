export enum Results {
  DEFEAT = 0,
  VICTORY = 1
}

export type Gender = 'M' | 'F'
export type CountryCode = 'SRB' | 'USA' | 'SUI' | 'ESP'
export type IPlayerLastResults = [Results, Results, Results, Results, Results]

export interface ICountry {
  picture: string
  code: CountryCode
}

export interface IPlayerData {
  rank: number
  points: number
  weight: number
  height: number
  age: number
  last: IPlayerLastResults
}

export interface IPlayer {
  id: number
  firstname: string
  lastname: string
  shortname: string
  sex: Gender
  country: ICountry
  picture: string
  data: IPlayerData
}
