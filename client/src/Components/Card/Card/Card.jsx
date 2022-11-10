import React from 'react'

const Card = ({ id, name, price, img }) => {
  return (
    <div>Card
      <img src={img} alt='not' width='50px' height='50px' />
    <h2>{name}</h2>
    <h3>{price}</h3>
    </div>   
  )
}

export default Card