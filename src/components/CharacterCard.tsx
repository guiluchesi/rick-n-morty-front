import { ReactElement } from 'react'

import TextWithStatus from './TextWithStatus'
import { Character } from '../types'

interface Props {
  character: Character
}

const CharacterCard = ({ character }: Props): ReactElement => {
  return (
    <div className='card flex bg-zinc-700 rounded-lg overflow-hidden'>
      <figure className='w-2/5'>
        <img className='object-cover h-full' src={character.image} alt={character.name} />
      </figure>

      <div className='card-body px-4'>
        <h3 className='text-3xl font-bold text-white mt-3'>{character.name}</h3>
        <TextWithStatus status={character.status} text={character.species} />

        <p className='mt-5 text-neutral-400 font-light'>Last known location:</p>
        <p className='text-white text-lg font-light'>{character.location}</p>

        <p className='mt-4 text-neutral-400 font-light'>First seen in:</p>
        <p className='text-white font-light'>{character.episodes.at(0)}</p>
      </div>
    </div>
  )
}

export default CharacterCard
