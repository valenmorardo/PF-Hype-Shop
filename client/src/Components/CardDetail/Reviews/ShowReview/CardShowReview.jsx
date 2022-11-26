import React from "react";
import ShowRating from "./ShowRating";

const CardShowReview = ({ review }) => {
  return (
    <div className="  bg-gray-50 border border-blue-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 mb-10  w-2/4">
      {review.userId === null ? (
        <h2>USUARIO: Usuario</h2>
      ) : (
        <h3>USUARIO: {review.userID}</h3>
      )}
      <br />

      <h3>{review.title}</h3>
      <p>{review.content}</p>

      <br />

      <span>
        PUNTAJE: <ShowRating rate={review.rate} />
      </span>
    </div>
  );
};

export default CardShowReview;
