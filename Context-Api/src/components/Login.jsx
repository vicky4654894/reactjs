import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';
function Login() {
    const[userName,setUserName] = useState('');
    const[password,setPassword] = useState('');
    const{setUser} = useContext(UserContext);
    const handleSubmit = (e)=>{
        setUser({userName,password});
    }

  return (
    <>
    <input type="text" value={userName} placeholder='User Name' onChange={(e)=>setUserName(e.target.value)} />
    <input type="text" value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
    <button onClick={handleSubmit}>Submit</button>
    
    </>
  )
}


export default Login;