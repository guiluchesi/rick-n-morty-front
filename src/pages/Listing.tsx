import { ReactElement } from 'react'

import Header from '../components/Header'
import CharacterCard from '../components/CharacterCard'

const Listing = (): ReactElement => {
  const characters = [
    {
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
          {characters.map((character): ReactElement => (<CharacterCard key={character.name} character={character} />))}
        </div>
      </main>
    </>
  )
}

export default Listing
