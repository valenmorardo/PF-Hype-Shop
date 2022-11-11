import React from "react";

const Paginado = ({ sneakersPerPage, sneakers, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(sneakers / sneakersPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      {pageNumbers &&
        pageNumbers.map((number) => (
          <button onClick={() => paginado(number)}>{number}</button>
        ))}
    </nav>
  );
};

export default Paginado;
