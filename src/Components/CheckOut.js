import React, { useEffect, useState } from 'react'

import { useLocation } from 'react-router-dom'

const CheckOut = () => {

  const history = useLocation();

  const [item,setItem] = useState([])

 

  useEffect(() => {
    setItem(history.state)
  },[])

  console.log(item)

  return (
    <>
     {item.map((data)=>
      {
        return(data)
      })}
    </>
  )
}

export default CheckOut
