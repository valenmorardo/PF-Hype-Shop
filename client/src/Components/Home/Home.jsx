import React from 'react'

import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getSneakers } from '../../Redux/actions/index';

import Card from "../Card/Card/Card";

const Home = () => {
  const dispatch = useDispatch()
  const sneakers = useSelector((state) => state.allSneakers)

  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch])

  if (sneakers.length === 0) {
    return (
      <div>
      <h1>cargando...</h1>
      </div>
    )
  } else {

    sneakers.map(e => {

      return (
        <div>
          <h5>Hype Shop</h5>
          <div key={e.id}>
            <Card
              id={e.id}
              name={e.name}
              img={e.img}
            />
          </div>
        </div>
      )
    })
  }
}
export default Home