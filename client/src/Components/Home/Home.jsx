import React from "react";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../Redux/actions/index";

import Card from "../Card/Card/Card";

const Home = () => {
  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.allSneakers);

  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch]);

  return (
    <div>
      <h5>HypeSHOP</h5>
      {
        sneakers.map((e) => {
          <div>
            <div>
              <Cards />
            </div>
          </div>;
        })

      }
    
    </div>
  );
};
export default Home;
