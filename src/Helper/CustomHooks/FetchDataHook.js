import React, { useState, useEffect } from 'react'
export function useFetch (url){
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch(url).then(res=>{return res.json}).then((x)=>{setData(x)})
    },[url])
    return ([data])
}