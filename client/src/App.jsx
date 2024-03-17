import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <p  className='text-red-600' >shubham start the frontend work</p>
     <Home/>
    </>
  )
}

export default App
