import Episode from './Episode'

interface Character {
  id: number
  name: string
  status: string
  species: string
  location: string
  image: string
  episodes: Episode[]
}

export default Character
