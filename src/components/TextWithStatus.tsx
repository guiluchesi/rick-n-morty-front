import { ReactElement } from 'react'

const TextWithStatus = ({ text = '', status = 'Unknown' }): ReactElement => {
  const statusMapping = new Map([
    ['Unknown', 'before:bg-slate-400'],
    ['Dead', 'before:bg-red-400'],
    ['Alive', 'before:bg-green-500 before:animate-pulse']
  ])

  const getStatusClass = (status: string): string => {
    return statusMapping.get(status) ?? 'before:bg-slate-400'
  }

  return (
    <div className={`pl-4 relative text-white before:content-[''] before:left-0 before:top-2 before:w-2 before:h-2 before:absolute before:rounded-full ${getStatusClass(status)}`}>
      {status} - {text}
    </div>
  )
}

export default TextWithStatus
