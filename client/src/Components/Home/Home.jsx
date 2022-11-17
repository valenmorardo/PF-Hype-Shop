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
  
  const nextPage = (pageNumber) => {
    if (currentPage < Math.ceil(sneakers.length / sneakersPerPage))
      setCurrentPage(pageNumber);
  };

  const prevPage = (pageNumber) => {
    if (currentPage > 1) setCurrentPage(pageNumber);
  };


  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch]);

  // console.log(sneakers);

  return (
    <div className="bg-white mb-0">
      {sneakers.length > 0 ? (
        <div>

          <NavBar/>

          <Filtrado
           
            setOrder={setOrder}
          />

          {/* <div>
            <Paginado
              sneakersPerPage={sneakersPerPage}
              sneakers={sneakers.length}
              paginado={paginado}
            />
          </div> */}


          <Cards sneakers={currentSneaker} />

          <Paginado
            nextPage={nextPage}
            prevPage={prevPage}
            currentPage={currentPage}
            sneakersPerPage={sneakersPerPage}
            sneakers={sneakers.length}
          />
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
