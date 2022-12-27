import React, { useEffect } from 'react'

function Login(props) {
    const [str, setStr] = React.useState('hello')
    const handleChange = (e)=>{
        setStr(e.target.value)
    }
    useEffect(()=>{
        console.log('loading done')
    })//componentDidUpdate 
  return (
    <div style={{backgroundColor:'lightcoral'}}>
        login
        {console.log('loading')}
        <h1>{props.value}</h1>
        <input onChange={(e)=>{props.setData(e)}} value={props.newValue}/>
    </div>
  )
}

export default Login