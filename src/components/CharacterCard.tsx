import { ReactElement } from 'react'

import TextWithStatus from './TextWithStatus'
import { Character } from '../types'

interface Props {
  character: Character
}

const CharacterCard = ({ character }: Props): ReactElement => {
  return (
    <div className='card flex bg-zinc-700 rounded-lg overflow-hidden'>
      <figure className='max-w-[180px]'>
        <img className='object-cover h-full' src={character.image} alt={character.name} />
      </figure>

      <div className='card-body p-4'>
        <h2 className='text-3xl font-bold text-white'>{character.name}</h2>
        <TextWithStatus status={character.status} text={character.species} />

        <p className='mt-5 text-neutral-400 font-light'>Last known location:</p>
        <p className='text-white text-lg font-light truncate'>{character.location}</p>

        <p className='mt-4 text-neutral-400 font-light'>First seen in:</p>
        <p className='text-white font-light truncate'>{character.episodes.at(0)}</p>
      </div>
    </div>
  )
}

export default CharacterCard
