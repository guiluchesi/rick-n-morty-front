import { Routes, Route, Navigate } from 'react-router-dom'
import { ReactElement } from 'react'

import NotFound from './components/NotFound'
import Listing from './pages/Listing'
import Character from './pages/Character'

const App = (): ReactElement => {
  return (
    <Routes>
      <Route path='/' element={<Listing />} />
      <Route path='/character' element={<Navigate replace to='/' />} />
      <Route path='/character/:charName' element={<Character />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default App
