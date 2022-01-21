import Episode from './Episode'

export interface CharacterListing {
  id: number
  name: string
  status: string
  species: string
  location: string
  image: string
  firstSeen: string
}

export interface CharacterDetails {
  id: number
  name: string
  status: string
  species: string
  location: string
  image: string
  episodes: Episode[]
}
