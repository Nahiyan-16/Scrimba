import React from 'react'
import Header from './Header'
import Card from './Card'
import Data from './Data'

function App() {
  let cardAry = Data.map(e=>{
    return <Card 
            key = {e.id}
            {...e}
            />
  })
  return (
    <div className="App">
      <Header />
      <div className='Main-Container'>
        {cardAry}
      </div>
    </div>
  )
}

export default App
