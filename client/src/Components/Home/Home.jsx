import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../Redux/actions/index";

// import Login from '../../Components/NavBar/Login/Login'
import Card from "../Cards/Card";

const Home = () => {
  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.allSneakers);

  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch]);

  return (
    <div>
      {/* <Login/> */}
      <h5>HypeSHOP</h5>
      {
        sneakers.map((e) => {
          return(
            <div>
              <Card
              title={e.title}
              price={e.price}
              pictures={e.pictures}
              />
          </div>
          )
        })

      }
    
    </div>
  );
};
export default Home;
