import React from 'react'
import ButtonComponent from './components/button'

const App = () => {
  return (
    <div>
      <ButtonComponent handleClick={() => console.log('alert')} />
    </div>
  )
}

export default App
