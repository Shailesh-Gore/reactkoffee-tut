import { useState } from 'react'


function App() {
    const [color, setColor] = useState('whitesmoke')

  return (
    <>
      <div className='w-screen h-screen py-4 px-3' style={{backgroundColor:color}}>
          <div className='mt-auto flex flex-wrap gap-2 justify-center  h-16 bg-white rounded-3xl px-5 py-2'>
            <button className='rounded-2xl bg-red-500 text-white' onClick={()=>setColor("red")}>red</button>
            <button className='rounded-2xl bg-green-500 text-white' onClick={()=>setColor("green")}>green</button>
            <button className='rounded-2xl bg-blue-500 text-white' onClick={()=>setColor("blue")}>blue</button>
            <button className='rounded-2xl bg-pink-500 text-white' onClick={()=>setColor("pink")}>pink</button>
          </div>
            <button className='mt-3 rounded-2xl bg-black text-white outline-none' onClick={()=>setColor("whitesmoke")}>reset</button>
      </div>
    </>
  )
}

export default App
