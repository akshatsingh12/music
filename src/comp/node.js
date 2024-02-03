import React, { useEffect, useState } from 'react'
const Node = () => {
  const [data,setData]=useState([]);
  const url = 'localhost:5000';
    const api =(async()=>{
        const res = await fetch(url);
        const result = await res.json();
        setData(result)
    })
    useEffect(()=>{
      api();
    },[])
    console.log('dwgy');
    console.log(data);
  return (
    <div>
      
    </div>
  )
}

export default Node
