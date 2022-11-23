import { React } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const CardFiltrado = ({ options, titulo, handler, propiedad }) => {
  const filtros = useSelector((state) => state.filtros);
  const orden = useSelector((state) => state.orden);
  const busqueda = useSelector((state) => state.search);

  function cleanSelect(propiedad) {
    if (propiedad === "brand") {
      document
        .getElementById("brand")
        .options.item("defaultValue").selected = true;
    }
    if (propiedad === "category") {
      document
        .getElementById("category")
        .options.item("defaultValue").selected = true;
    }
    if (propiedad === "gender") {
      document
        .getElementById("gender")
        .options.item("defaultValue").selected = true;
    }
  }

  useEffect(() => {
    if (Object.values(filtros).length === 0) {
      cleanSelect(propiedad);
    }
    if (Object.values(orden).length === 0) {
      if (propiedad === "orden") {
        document
          .getElementById("orden")
          .options.item("defaultValue").selected = true;
      }
    }
  }, [filtros, orden]);

  useEffect(() => {
    cleanSelect(propiedad);
  }, [busqueda]);

  return (
    <>
      <div>
        {propiedad === "brand" ? (
          <select
            id="brand"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => {
              handler(e.target.value);
            }}
          >
            <option disabled selected value="defaultValue">
              {titulo}
            </option>
            {options.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        ) : propiedad === "category" ? (
          <select
            id="category"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => {
              handler(e.target.value);
            }}
          >
            <option disabled selected value="defaultValue">
              {titulo}
            </option>
            {options.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        ) : propiedad === "gender" ? (
          <select
            id="gender"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => {
              handler(e.target.value);
            }}
          >
            <option disabled selected value="defaultValue">
              {titulo}
            </option>
            {options.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        ) : propiedad === "orden" ? (
          <select
            id="orden"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            onChange={(e) => {
              handler(e.target.value);
            }}
          >
            <option disabled selected value="defaultValue">
              {titulo}
            </option>
            {options.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CardFiltrado;
