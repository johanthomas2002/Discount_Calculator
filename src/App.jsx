import { useState } from 'react'
import './App.css'
import Header from './Header'
import Calculator from './Calculator'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Calculator/>
    </>
  )
}

export default App
