import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'
import Education from './components/Education'
import Experience from './components/Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GeneralInfo />
      <Education />
      <Experience />
    </>
  )
}

export default App
