import React from "react";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../Redux/actions/index";

import Cards from "../Cards/Cards";
import Paginado from "../Paginado/Paginado";
import NavBar from "../NavBar/NavBar";
import styles from "./Home.module.css";
import SearchBar from "../NavBar/SearchBar/SearchBar";
import Filtrado from "../NavBar/Filtrado/Filtrado";

const Home = () => {
  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.allSneakers);

  //PAGINADO:
  const [order, setOrder] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sneakersPerPage, setSneakersPerPage] = useState(9);
  const indexLastSneaker = currentPage * sneakersPerPage;
  const indexFirstSneaker = indexLastSneaker - sneakersPerPage;
  const currentSneaker = sneakers.slice(indexFirstSneaker, indexLastSneaker);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch]);

  console.log(sneakers);

  return (
    <div className={styles.fondo}>
      {sneakers.length > 0 ? (
        <div>


          <div>
            <NavBar />

          </div>

          <Filtrado 
           setCurrentPage={setCurrentPage}
           setOrder={setOrder}
          />

          <div>
            <Paginado
              sneakersPerPage={sneakersPerPage}
              sneakers={sneakers.length}
              paginado={paginado}
            />
          </div>

          <div>
            <Cards sneakers={currentSneaker} />
          </div>

          <div>
            <Paginado
              sneakersPerPage={sneakersPerPage}
              sneakers={sneakers.length}
              paginado={paginado}
            />
          </div>
        </div>

      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}

    </div>
  );
};
export default Home;
