import { useParams } from 'react-router-dom'

const Character = () => {
  const { charName } = useParams()

  return (
    <h1 className='text-3xl font-bold underline text-center mt-10'>
      Character {charName}
    </h1>
  )
}

export default Character