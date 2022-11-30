import React from "react";
import CardAdmin from "./CardAdmin.jsx";
import {Link} from 'react-router-dom'


const CardsAdmin = ({ sneakers }) => {



  return (
    // <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //   {sneakers?.map((e) => (
    //     <Link to={`/sneaker/${e.id}`}>
    //     <Card {...e} />
    //     </Link>
    //   ))}
    // </div>
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {sneakers?.map((e) => (
                <Link to={`/sneakerAdmin/${e.id}`}>
                  <CardAdmin {...e} />
                  </Link>
                ))}
            </div>
      </div>
  </div>
  );
};

export default CardsAdmin;