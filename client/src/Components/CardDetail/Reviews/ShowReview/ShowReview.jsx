import React from 'react'
import { useSelector } from 'react-redux';
import CardShowReview from './CardShowReview';


const ShowReview = ({reviews}) => {


  return (

    <div >
      <h1 className=" text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-5 ">REVIEWS DEL PRODUCTO</h1>

      <div className='flex flex-col items-center'>
        {
          reviews.map(e=> (
            <CardShowReview review={e}/>
          ))
        }
      </div>

    </div>
  )
}

export default ShowReview
