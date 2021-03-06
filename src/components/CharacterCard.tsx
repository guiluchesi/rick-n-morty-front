import { ReactElement } from 'react'

import TextWithStatus from './TextWithStatus'
import { CharacterListing as CharacterType } from '../types'

interface Props {
  character: CharacterType
}

const CharacterCard = ({ character }: Props): ReactElement => {
  return (
    <div className='card flex flex-wrap md:flex-nowrap bg-zinc-700 rounded-lg overflow-hidden h-full items-center'>
      <figure className='w-full md:max-w-[220px] md:h-full mt-8 mb-4 md:m-0'>
        <img className='object-cover h-full mx-auto rounded-full md:rounded-none' src={character.image} alt={character.name} />
      </figure>

      <div className='card-body p-4'>
        <h2 className='text-2xl md:text-3xl font-bold text-white'>{character.name}</h2>
        <TextWithStatus status={character.status} text={character.species} />

        <p className='mt-5 text-neutral-400 font-light'>Last known location:</p>
        <p className='text-white text-lg font-light truncate'>{character.location}</p>

        <p className='mt-4 text-neutral-400 font-light'>First seen in:</p>
        <p className='text-white font-light truncate'>{character.firstSeen}</p>
      </div>
    </div>
  )
}

export default CharacterCard
