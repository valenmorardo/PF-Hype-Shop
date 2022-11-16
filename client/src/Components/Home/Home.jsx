import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../Redux/actions/index";

import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css";
import Filtrado from "../NavBar/Filtrado/Filtrado";
import Loading from '../Loading/Loading';

const Home = () => {
  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.allSneakers);

  //PAGINADO:
  const [currentPage, setCurrentPage] = useState(1);
  const [sneakersPerPage, setSneakersPerPage] = useState(9);
  const indexLastSneaker = currentPage * sneakersPerPage;
  const indexFirstSneaker = indexLastSneaker - sneakersPerPage;
  const currentSneaker = sneakers.slice(indexFirstSneaker, indexLastSneaker);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const paginaUno = () => {
    setCurrentPage(1);
  };

  const [isLoading, setIsLoading] = useState(true)



  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch]);

  // console.log(sneakers);

  return (

    <div className={styles.fondo}>


        <div>
          <NavBar paginaUno={paginaUno}/>

          <Filtrado
            paginaUno={paginaUno}
            setIsLoading={setIsLoading}
          />


          { 
          isLoading?
            <Loading setIsLoading={setIsLoading}
            isLoading={isLoading}/>
            :
            <Cards sneakers={currentSneaker} />
          }

          <Paginado
            sneakersPerPage={sneakersPerPage}
            sneakers={sneakers.length}
            paginado={paginado}
          />
        </div>
    </div>
  );
};
export default Home;
