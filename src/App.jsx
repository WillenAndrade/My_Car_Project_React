
import './App.css'
import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Text from './components/Text'
import Cards from './components/Cards'

function App() {
  

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Text />
      <Cards />
    </div>
  )
}

export default App
