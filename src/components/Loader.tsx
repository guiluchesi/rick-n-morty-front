import { ReactElement, useState, useEffect } from 'react'

interface Props {
  className: string
}

const Loader = ({ className }: Props): ReactElement => {
  const [loadingDots, setLoadingDots] = useState('.')

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingDots((prevLoadingDots): string => {
        if (prevLoadingDots.length >= 3) {
          return '.'
        }

        return prevLoadingDots + '.'
      })
    }, 700)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className={`text-3xl text-white font-bold text-center ${className}`}>
      {`Loading${loadingDots}`}
    </div>
  )
}

export default Loader
