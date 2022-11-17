import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './Loading.module.css'

const Loading = ({setIsLoading, isloading}) => {

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [isloading])



  return (
<div className={styles.box}>

<div className={styles.spinner}>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>
</div>
    
  )

}

export default Loading;