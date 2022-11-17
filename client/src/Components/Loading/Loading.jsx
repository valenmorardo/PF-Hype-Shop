import React, { useEffect } from 'react'
import { useState } from 'react'

const Loading = ({setIsLoading, isloading}) => {

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [isloading])



  return (

    <div>
     <h1>LOADING...</h1>
    </div>
    
  )

}

export default Loading;