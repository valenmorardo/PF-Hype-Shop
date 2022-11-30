import React from "react";
import CardShowReview from "./CardShowReview";
import ShowRating from "./ShowRating";

const ShowReview = ({ reviews }) => {
  let sumaTotalRates = 0;
  reviews.map((e) => {
    sumaTotalRates = sumaTotalRates + e.rate;
  });

  let ratePromedio = sumaTotalRates / reviews.length;

  return (
    <div>
      <h1 className=" text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-2 ">
        REVIEWS DEL PRODUCTO
      </h1>
      <h2 className="mb-4">
        PUNTAJE PROMEDIO: {<ShowRating ratePromedio={ratePromedio} />}
      </h2>

      <div className="flex flex-col items-center">
        {reviews.map((e) => (
          <CardShowReview review={e} />
        ))}
      </div>
    </div>
  );
};

export default ShowReview;
