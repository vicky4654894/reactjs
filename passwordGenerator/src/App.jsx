import { useCallback, useEffect, useState,useRef } from 'react'
import './index.css'

function App() {
 
  const[length,setLength] = useState(8);
  const[password,setPassword] = useState("");
  const[specialCharacter,setSpecialCharacter] = useState(false);
  const[number,setNumber] = useState(false);
  const passwordRef = useRef(null);
  const copyClickedBoard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])
  const generatePassword = useCallback(()=>{
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(number){
      str=str+"1234567890";
    }
    if(specialCharacter){
      str=str+"!@#$%^&*()_?><~";
    }
    console.log(str)
    let pass="";
    for(let i=0;i<length;i++){
      let index = Math.random()*str.length;
      index=Math.floor(index+1);
      pass=pass+str.charAt(index);
    }
    setPassword(pass);
  },[length,specialCharacter,number,setPassword])

  useEffect(()=>{
    generatePassword();
  },[length,specialCharacter,number,generatePassword])
 
  return (
    <>
    <div className='container items-center mx-8'>
    <div className="flex justify-between items-center gap-4 rounded-md overflow-hidden border-2 border-gray-300 bg-white px-4 py-2 mt-4">
  <input type="text"  placeholder='password' ref={passwordRef} value={password}  />
  <button onClick={copyClickedBoard} className="h-full px-4 py-2 rounded-md bg-blue-500 text-white font-bold shadow-md hover:bg-blue-700 focus:ring-0 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"  >Copy</button>
</div>

<div className="flex items-center gap-4">
  <label className="inline-flex items-center">
    <input type="range" min="6" max="100" value={length} onChange={(e)=>setLength(e.target.value)} className="w-100 rounded-md h-2 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" />
    <span className="ml-2 font-semibold text-gray-700">Length {length}</span>
  </label>
  <div className="flex flex-col">
    <label className="inline-flex items-center">
      <input type="checkbox"  defaultChecked={number}  className="h-4 w-4 rounded-md focus:ring-0 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50" onChange={()=>setNumber((prev)=>!prev)}  />
      <span className="ml-2 text-gray-700">Numbers</span>
    </label>
    <label className="inline-flex items-center mt-2">
      <input type="checkbox" defaultChecked={specialCharacter} className="h-4 w-4 rounded-md focus:ring-0 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50" onChange={()=>setSpecialCharacter((prev)=>!prev)}  />
      <span className="ml-2 text-gray-700">Characters</span>
    </label>
  </div>
</div>
</div>
    </>
  )
}

export default App
