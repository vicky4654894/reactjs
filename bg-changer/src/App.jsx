import { useState } from 'react'

import './index.css'

function App() {
  const[color,setColor] = useState("black");
  return (
    <>
    <div className='w-full h-screen flex-wrap duration-200' style={{backgroundColor:color}}>
    <div className='flex flex-wrap bottom justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button className='outline-none px-4 py-1 rounded-full text-white' onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
      <button className='outline-none px-4 py-1 rounded-full text-white' onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
      <button className='outline-none px-4 py-1 rounded-full text-white' onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
      <button className='outline-none px-4 py-1 rounded-full text-white' onClick={()=>setColor("black")} style={{backgroundColor:"black"}}>Black</button>
    </div>
</div>
    </>

    

  )
}

export default App
