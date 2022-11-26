import React from 'react'
import Img from './Components/Img'
import Title from './Components/Title'
import Links from './Components/Links'
import MainContent from './Components/MainContent'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Img/>
      <main>
        <Title/>
        <Links/>
        <MainContent/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
