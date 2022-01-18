import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import CharacterCard from '../components/CharacterCard'
import characters from '../data/characters'
import { Character as CharacterType } from '../types'

const Listing = (): ReactElement => {
  return (
    <>
      <Header />
      <main className='bg-zinc-800 py-10'>
        <h1 className='text-3xl text-white font-bold text-center'>
          Listing
        </h1>
        <div className='container'>
          <div className='mt-5 list mx-auto max-w-3xl xl:max-w-none grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
            {characters.map((character: CharacterType): ReactElement => (
              <Link key={character.id} to={`/character/${character.id}`}>
                <CharacterCard character={character} />
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}

export default Listing
