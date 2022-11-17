import React from "react";

const RefreshPage = () => {
  function refresh(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  return (
    <div>
      <h1>No se encuentran productos</h1>
      <br />
      <button onClick={(e) => refresh(e)}>Seguir explorando</button>
    </div>
  );
};

export default RefreshPage;
