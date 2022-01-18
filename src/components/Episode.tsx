import { ReactElement } from 'react'
import { Episode as EpisodeType } from '../types'

interface Props {
  episode: EpisodeType
}

const Episode = ({ episode }: Props): ReactElement => (
  <div className='mb-3'>
    <span className='bg-slate-200 inline-block mr-2 rounded-full px-2 text-sm'>{episode.episode}</span>
    <h3 className='text-white inline-block'>{episode.name}</h3>
  </div>
)

export default Episode
