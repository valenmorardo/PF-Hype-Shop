import React from 'react'

const Card = ({ title, pictures, price }) => {
  return (
    <div>Card
      <div>
        <img src={pictures} alt='not image' width='20%' height='20%'></img>
        <h1>{title}</h1>
        <br></br>
        <h2>$ {price}</h2>
      </div>
    </div>

  )
}

export default Card