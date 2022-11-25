import React from 'react'

const CardShowReview = ({review}) => {

    console.log(review) 

  return (
    
    <div class=" border-solid border-2 border-black pb-10" > 
 
        {
          review.userId === null?
          <h2>USUARIO: Pepe</h2> 
          :
          <h3>USUARIO: {review.userID }</h3>
        }

        <h3>{review.title}</h3>
        <p>{review.content}</p>
        <span>Puntaje: {review.rate}</span>
  
    </div>
  )
}

export default CardShowReview