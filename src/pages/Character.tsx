import { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import TextWithStatus from '../components/TextWithStatus'
import Episode from '../components/Episode'
import Loader from '../components/Loader'

import {
  CharacterDetails as CharacterType,
  Episode as EpisodeType
} from '../types'

const Character = (): ReactElement => {
  const { charId } = useParams()
  const [status, setStatus] = useState<string>('idle')
  const [character, setCharacter] = useState<CharacterType>()

  const getCharDetails = (charId: number): void => {
    setStatus('loading')

    void fetch(`https://rick-n-morty-api.herokuapp.com/characters/${charId}`)
      .then(async response => await response.json())
      .then(character => {
        setCharacter(character)
        setStatus('loaded')
      })
  }

  useEffect(() => {
    getCharDetails(Number(charId))
  }, [charId])

  return (
    <>
      <Header title={character?.name} />
      <main className='bg-zinc-800 py-10'>
        {status === 'loading'
          ? <Loader className='my-10' />
          : (
            <>
              <div className='container flex flex-col sm:flex-row items-center justify-center my-10'>
                <figure className='max-w-[250px] rounded-full overflow-hidden'>
                  <img className='object-cover h-full' src={character?.image} alt={character?.name} />
                </figure>

                <div className='flex flex-col w-full w-auto justify-center mt-7 md:ml-10 md:mt-0'>
                  <h2 className='text-3xl font-bold text-white'>{character?.name}</h2>
                  <TextWithStatus status={character?.status} text={character?.species} />

                  <p className='mt-5 text-neutral-400 font-light'>Last known location:</p>
                  <p className='text-white text-lg font-light truncate'>{character?.location}</p>
                </div>
              </div>

              <div className='container'>
                <div className='w-full md:w-1/2 mx-auto'>
                  <h2 className='text-3xl font-bold text-white text-center mt-10 mb-5'>Episodes Listing</h2>
                  {character?.episodes.map((episode: EpisodeType): ReactElement => (
                    <Episode key={episode.id} episode={episode} />
                  ))}
                </div>
              </div>
            </>
            )}
      </main>
    </>
  )
}

export default Character
