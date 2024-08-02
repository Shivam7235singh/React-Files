import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)
   let myObj = {
    username : "shivam",
    age : 21,
  }
  let myArr = [1, 2 , 4];

  return (
    <>
      <h1 className='bg-green-400 taxt - black rounded -xl mb-4'>Tailwind Text</h1>
       <Card channel = "chaiaurcode" someObj = {myArr}/>
       <Card/>
    </>
  )
}

export default App
