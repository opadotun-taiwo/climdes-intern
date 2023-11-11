import React from 'react'

import Jobs from '../Components/JobDiv/Jobs'
import Value from '../Components/ValueDiv/Value'
import Footer from '../Components/Footer/Footer'
import Hero from '../Components/Hero/Hero'
import NavBar from '../Components/Navbar/Navbar'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <NavBar />
      <Hero />
      <Jobs />
      <Value />
      <Footer />
    </div>
  )
}

export default App
