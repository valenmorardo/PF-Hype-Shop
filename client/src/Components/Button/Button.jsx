import React from "react";

//BOTON REUTILIZABLE

const ResetFilters = ({ title, textButton, onClick }) => {
  return (
    <div>
      <h1 className="my-10 text-base font-medium text-gray-800">{title}</h1>
      <button
        class="text-white  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
        onClick={onClick}
      >
        {textButton}
      </button>
    </div>
  );
};

export default ResetFilters;
