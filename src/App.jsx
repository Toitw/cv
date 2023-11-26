import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GeneralInfo />
      <Education />
    </>
  )
}

export default App
