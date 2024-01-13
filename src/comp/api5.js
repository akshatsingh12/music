import React, { useEffect, useState } from 'react'

const api5 = () => {
   const [info,setInfo]=useState([]);
   useEffect(()=>{
    fetch()
    .then((res) => res.json)
    .then((data)=>{
        return console.log(data);
    })
   },[])
  return (
    <div>
      
    </div>
  )
}

export default api5
