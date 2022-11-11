import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../Redux/actions/index";


import Cards from "../Cards/Cards";


const Home = () => {
  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.allSneakers);

  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch]);

  return (
    <div>
      {
        sneakers.map((e) => {
          return(
            <div>
              <Card 
                title={e.title}
                price={e.price}
                pictures={e.pictures} />
            </div>  
          )          
        })
      }
    
    </div>
  );
};
export default Home;
