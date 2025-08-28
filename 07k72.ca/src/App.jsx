
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projects'

function App() {
  return (
    <div className='text-white'>
      {/* <Link className='text-blue-400 mr-10 underline' to='/agence'>Agence</Link>
      <Link className='text-blue-400 mr-10 underline' to='/'>Home</Link>
      <Link className='text-blue-400 mr-10 underline' to='/projects'>Projects</Link> */}

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/agence' element={<Agence />} />
      <Route path='/projects' element={<Projects />} />

    </Routes>

    </div>
  )
}

export default App
