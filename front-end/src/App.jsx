import { useState } from 'react'
import LoginPage from '../src/Components/LoginPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <LoginPage/>
    </>
  )
}

export default App
