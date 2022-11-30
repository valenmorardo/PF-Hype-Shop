import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getSneakers } from "../../Redux/actions/index";
import CardAdmin from "./CardsAdmin";
import Filtrado from "../NavBar/Filtrado/Filtrado";
import Loading from "../Loading/Loading";
import Paginado from "../Paginado/Paginado";
import Button from "../Button/Button";
import SearchBar from "../NavBar/SearchBar/SearchBar";

const CatalogoAdmin = () => {

  const dispatch = useDispatch();
  const sneakers = useSelector((state) => state.allSneakers);

  //PAGINADO:
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

  const paginaUno = () => {
    setCurrentPage(1);
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getSneakers());
  }, [dispatch]);

  // console.log(sneakers);

  function refreshPage() {
    window.location.reload(false);
  }

return(
  <div className="  right-10 w-7/12 ">

<div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
<Filtrado setIsLoading={setIsLoading} paginaUno={paginaUno} />
          <SearchBar paginaUno={paginaUno} />
        </div>

  {isLoading ? (
    <Loading setIsLoading={setIsLoading} isLoading={isLoading} />
  ) : sneakers.length ? (
    <div>
      <CardAdmin sneakers={currentSneaker} />
      <Paginado
        nextPage={nextPage}
        prevPage={prevPage}
        currentPage={currentPage}
        sneakersPerPage={sneakersPerPage}
        sneakers={sneakers.length}
      />
    </div>
  ) : (
    <Button
      title={
        "No se encontraron productos. Por favor, recargar la pagina o reiniciar filtros."
      }
      textButton={"Recargar"}
      onClick={refreshPage}
    />
  )}
  </div>
)

}

export default CatalogoAdmin;
