import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getBrands,
  getCategories,
  getGenders,
  filterSneakers,
  getSneakers,
} from "../../../Redux/actions/index";
import CardFiltrado from "./cardFiltrado";
import Button from "../../Button/Button";

const Filtrado = ({ setIsLoading, paginaUno }) => {
  const dispatch = useDispatch();

  const filtrosReducer = useSelector((state) => state.filtros);
  const ordenReducer = useSelector((state) => state.orden);
  const [filtros, setFiltros] = useState(filtrosReducer);
  const [orden, setOrden] = useState(ordenReducer);

  const orderPrice = ["Menor a mayor", "Mayor a menor"];
  const brands = useSelector((state) => state.brands);
  const category = useSelector((state) => state.categories);
  const gender = useSelector((state) => state.genders);

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

  function resetFilters() {
    dispatch(getSneakers());
    setFiltros({});
    setOrden({});
    setIsLoading(true);
    paginaUno();
  }

  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getGenders());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(filtros).length || Object.keys(orden).length) {
      setFilters();
    }
  }, [filtros, orden]);

  useEffect(() => {
    if (
      !(Object.keys(filtrosReducer).length || Object.keys(ordenReducer).length)
    ) {
      setFiltros({});
      setOrden({});
    }
  }, [filtrosReducer, ordenReducer]);

  return (
    <>
      <h1 className="block mb-2 text-base font-medium text-gray-600">
        FILTROS
      </h1>
      <div className="flex justify-around flex-wrap">
        {/* FILTROS */}
        <CardFiltrado
          options={brands}
          titulo="Filtrar por marca"
          handler={handlerFilter("brand")}
          propiedad={"brand"}
        />

        <CardFiltrado
          options={category}
          titulo="Filtrar por categoria"
          handler={handlerFilter("category")}
          propiedad={"category"}
        />

        <CardFiltrado
          options={gender}
          titulo="Filtrar por genero"
          handler={handlerFilter("gender")}
          propiedad={"gender"}
        />

        {/* ORDENAMIENTO: */}
        <CardFiltrado
          options={orderPrice}
          titulo="Ordenar por precio"
          handler={handlerOrden("orderPrice")}
          propiedad={"orden"}
        />

        {Object.values(filtros).length || Object.values(orden).length ? (
          <Button textButton={"Reiniciar filtros"} onClick={resetFilters} />
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Filtrado;
