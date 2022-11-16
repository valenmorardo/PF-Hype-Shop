import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBrands,
  getCategories,
  getGenders,
  filterSneakers,

} from "../../../Redux/actions/index";

import CardFiltrado from "./cardFiltrado";

const Filtrado = ({setIsLoading}) => {
  const dispatch = useDispatch();

  
  const orderPrice = ["MAYORPrecio", "MENORPrecio"];

  const brands = useSelector((state) => state.brands);
  const category = useSelector((state) => (state.categories));
  const gender = useSelector((state) => (state.genders))

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
    }
  }

  function handlerOrden(propiedad) {
    return (valor) => {
      setOrden({ ...orden, [propiedad]: valor });
    }
  }

  function setFilters() {
    dispatch(filterSneakers({
      filtros,
      orden
    }));
    setIsLoading(true);
  }

  useEffect(() => {
    if(Object.keys(filtros).length || Object.keys(orden).length) {
      setFilters()
    }
  }, [filtros, orden]);
  

  return (
    <div>
      <h1>FILTROS</h1>
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

    </div>
  );
};

export default Filtrado;
