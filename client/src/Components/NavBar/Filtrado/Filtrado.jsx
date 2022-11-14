import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getSneakers, filtroMarca, filtroGenero, alphaSort,filtroPrecios } from '../../../Redux/actions/index'

const Filtrado = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getSneakers()), [dispatch]);
  const xx = useSelector((state) => state.allSneakers);

  const handleOrderByAlpha = (e) => {
    e.preventDefault();
    dispatch(alphaSort(e.target.value));

  };
  const handleOrderByGeneros = (e) => {
    e.preventDefault();
    dispatch(filtroGenero(e.target.value));
  };
  const handleOrderByPrecios = (e) => {
    e.preventDefault();
    dispatch(filtroPrecios(e.target.value));
  };

  const mostrarMarcas = (e) => {
    e.preventDefault();
    dispatch(filtroMarca(e.target.value));
  }

  return (
    <div>
      <select onChange={(e) => handleOrderByAlpha(e)}>
        <option value="all">Filtro</option>
        <option value="aToz">A-Z </option>
        <option value="zToa">Z-A </option>
      </select><br />

      <select onChange={(e) => handleOrderByGeneros(e)}>
        <option value="all">Generos</option>
        <option value="femenino">Femenino </option>
        <option value="masculino">Masculino</option>
      </select><br />

      <select onChange={(e) => handleOrderByPrecios(e)}>
        <option value="all">Precios</option>
        <option value="menor">Menor</option>
        <option value="mayor">Mayor</option>
      </select><br />

      <select onChange={(e) => mostrarMarcas(e)}>
        <option value="all">Marcas</option>
        <option value="Jaguar">Jaguar</option>
        <option value="Araquina">Araquina</option>
        {/* <option value="Fila">Fila</option>Araquina
        <option value="Fila">Fila</option>Araquina
        <option value="Fila">Fila</option>Araquina
 */}
        <option value="Topper">Topper</option>
      </select><br />



    </div>

  )
}

export default Filtrado