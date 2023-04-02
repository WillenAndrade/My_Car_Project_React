import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero'
import Text from './components/Text'
import Cards from './components/Cards'
import FormLogin from './components/pages/FormLogin'
import Footer from './components/Footer'

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <Text />
      <Cards/>
      <FormLogin />
      <Footer />
    </div>
  )
}
export default App
