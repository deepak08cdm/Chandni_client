import React, { useEffect, useState } from 'react'

function Login(props) {
    const [data, setData] = useState({username:'',password:''})
    
    const handleChange = (e)=>{
        const val = {...data,[e.target.name]:e.target.value}
        setData(val)
    }
    const handleClick = (e)=>{
      console.log(data)
    }

  return (
    <div style={{backgroundColor:'lightcoral'}} onChange={handleChange}>
        
          <input type='text' name='username' value={data.username}/>
          <input type='text' name='password' value={data.password}/>
          <button type='submit' onClick={handleClick}>login</button>
    </div>
  )
}

export default Login