import React from "react";


const RefreshPage = () => {
  function refresh(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  return (
    <div className="flex-col">
      
      <h1 className="my-10 text-base font-medium text-gray-800">No se encuentran productos :( </h1> 
      
      <button class="text-white  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 " onClick={(e) => refresh(e)}>Seguir explorando</button>
    </div>
  );
};

export default RefreshPage;
