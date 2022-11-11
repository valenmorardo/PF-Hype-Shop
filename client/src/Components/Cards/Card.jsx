import React from 'react'
import style from './Card.module.css'


const Card = ({ title, pictures, price }) => {
  return (
    <div className={style.card}>
      <img src={pictures} alt='not image' width='20%' height='20%'></img>
      <h1>{title}</h1>
      <br></br>
      <h2>$ {price}</h2>
    </div>
  )
}

export default Card