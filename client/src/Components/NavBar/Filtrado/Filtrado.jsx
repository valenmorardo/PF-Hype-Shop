import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBrands,
  getCategories,
  getGenders,
  filterSneakers,
} from "../../../Redux/actions/index";

import CardFiltrado from "./cardFiltrado";
import RefreshPage from "../../RefreshPage.jsx/RefreshPage";

const Filtrado = ({ setIsLoading, paginaUno }) => {
  const dispatch = useDispatch();

  const orderPrice = ["Menor a mayor", "Mayor a menor"];

  const brands = useSelector((state) => state.brands);
  const category = useSelector((state) => state.categories);
  const gender = useSelector((state) => state.genders);

  const [filtros, setFiltros] = useState({});
  const [orden, setOrden] = useState({});

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getGenders());
  }, [dispatch]);

  function handlerFilter(propiedad) {
    return (valor) => {
      setFiltros({ ...filtros, [propiedad]: valor });
      paginaUno();
    };
  }

  function handlerOrden(propiedad) {
    return (valor) => {
      setOrden({ ...orden, [propiedad]: valor });
      paginaUno();
    };
  }

  function setFilters() {
    dispatch(
      filterSneakers({
        filtros,
        orden,
      })
    );
    setIsLoading(true);
  }

  useEffect(() => {
    if (Object.keys(filtros).length || Object.keys(orden).length) {
      setFilters();
    }
  }, [filtros, orden]);


  return (
<>
      <h1 className="block mb-2 text-base font-medium text-gray-600">FILTROS</h1>
    <div className="flex justify-around flex-wrap">
      {/* FILTROS */}
      <CardFiltrado
        options={brands}
        titulo="Filtrar por marca"
        handler={handlerFilter('brand')}
      /> 
      
      <CardFiltrado
        options={category}
        titulo="Filtrar por categoria"
        handler={handlerFilter("category")}
       /> 

        <CardFiltrado
          options={gender}
          titulo="Filtrar por genero"
          handler={handlerFilter("gender")}
        />

        {/* ORDENAMIENTO: */}
        <CardFiltrado
          options={orderPrice}
          titulo="Ordenar por precio"
          handler={handlerOrden("orderPrice")}
        />

        {Object.values(filtros).length  || Object.values(orden).length? (
          <RefreshPage textButton={"Reiniciar Filtros"} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Filtrado;
