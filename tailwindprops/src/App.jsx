import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const someObj = {
    name: 'shailesh',
    age: 34
  }

  const myArr = [1,2,3]
  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind css </h1>
     <Cards myClass = "shailesh" someObj = {someObj} btnText = "proceed"/>
     <Cards/>
    </>
  )
}

export default App
