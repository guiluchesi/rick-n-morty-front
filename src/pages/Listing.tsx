import { ReactElement } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import CharacterCard from '../components/CharacterCard'

const Listing = (): ReactElement => {
  const characters = [
    {
      id: 1,
      name: 'Blue Diplomat',
      status: 'Alive',
      species: 'Alien',
      location: 'Interdimensional Cable',
      image: 'https://rickandmortyapi.com/api/character/avatar/51.jpeg',
      episodes: [
        'Interdimensional Cable 2: Tempting Fate'
      ]
    },
    {
      id: 2,
      name: 'Boobloosian',
      status: 'Dead',
      species: 'Alien',
      location: 'Nuptia 4',
      image: 'https://rickandmortyapi.com/api/character/avatar/55.jpeg',
      episodes: [
        'Big Trouble in Little Sanchez',
        'The Wedding Squanchers'
      ]
    }
  ]

  return (
    <>
      <Header />
      <main className='bg-zinc-800 h-screen py-10 mt-10'>
        <h1 className='text-3xl text-white font-bold text-center'>
          Listing
        </h1>
        <div className='mt-5 list container grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4'>
          {characters.map((character): ReactElement => (
            <Link key={character.id} to={`/character/${character.id}`}>
              <CharacterCard character={character} />
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

export default Listing
