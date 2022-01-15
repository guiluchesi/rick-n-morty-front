import { ReactElement, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Header from '../components/Header'
import { Character as CharacterType } from '../types'
import characters from '../data/characters'

const Character = (): ReactElement => {
  const { charId } = useParams()
  const [character, setCharacter] = useState<CharacterType>()

  const getCharDetails = (charId: number): CharacterType => {
    return characters.find((char: CharacterType) => char.id === charId)
  }

  useEffect(() => {
    const character = getCharDetails(Number(charId))
    setCharacter(character)
  }, [charId])

  return (
    <>
      <Header title={(character != null) ? character.name : ''} />
    </>
  )
}

export default Character
