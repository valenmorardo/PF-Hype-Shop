import React from 'react'

const CardShowReview = ({review}) => {

    console.log(review) 

  return (
    
    <div className="  bg-gray-50 border border-blue-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 mb-10  w-2/4"> 
 
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
