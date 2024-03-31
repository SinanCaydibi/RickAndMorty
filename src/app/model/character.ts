import { ResourceBase } from "./model"


interface DetailedData {
    name: string
    url: string
  }
  
  export interface Character extends ResourceBase {
    status: string
    species: string
    type: string
    gender: string
    origin: DetailedData
    location: DetailedData
    favori:boolean
    image: string
    episode: string[]
  }

