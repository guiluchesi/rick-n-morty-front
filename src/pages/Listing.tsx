import { ReactElement, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'
import CharacterCard from '../components/CharacterCard'
import Loader from '../components/Loader'

import { CharacterListing as CharacterType } from '../types'

const Listing = (): ReactElement => {
  const [status, setStatus] = useState<string>('idle')
  const [charactersList, setCharactersList] = useState<CharacterType[]>([])
  const [page, setPage] = useState<number>(1)

  const loadCharacters = (page: number): void => {
    setStatus('loading')

    void fetch(`https://rick-n-morty-api.herokuapp.com/characters?page=${page}`)
      .then(async response => await response.json())
      .then(characters => {
        setCharactersList(prevCharactersList => [...prevCharactersList, ...characters])
        setStatus('loaded')
      })
  }

  const loadMore = (): void => {
    const nextPage = page + 1
    setPage(nextPage)
    loadCharacters(nextPage)
  }

  useEffect(() => {
    loadCharacters(page)
  }, [])

  return (
    <>
      <Header />
      <main className='bg-zinc-800 py-10'>
        {page === 1 && status === 'loading'
          ? <Loader className='my-10' />
          : (
            <div className='container'>
              <div className='mt-5 list mx-auto max-w-3xl xl:max-w-none grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
                {charactersList.map((character: CharacterType): ReactElement => (
                  <Link key={character.id} to={`/character/${character.id}`}>
                    <CharacterCard character={character} />
                  </Link>
                ))}
              </div>
              <div className='text-center mt-10'>
                <button
                  onClick={loadMore}
                  disabled={status === 'loading'}
                  className='border border-orange-500 hover:bg-transparent hover:bg-orange-500 transition px-3 py-2 rounded-md text-white'
                >
                  {status === 'loading' ? 'Loading...' : 'Load more'}
                </button>
              </div>
            </div>
            )}
      </main>
    </>
  )
}

export default Listing
