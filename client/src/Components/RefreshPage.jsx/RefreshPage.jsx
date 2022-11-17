import React from "react";

// ¡¡¡¡¡¡¡ COMPONENTE REUTILIZABLE !!!!!!!!
// refresca la pagina

const RefreshPage = ({title, textButton}) => {
  function refresh(e) {
    e.preventDefault();
    window.location.reload(false);
  }

  return (
    <div>
      <h1>{title}</h1>
      <br />
      <button onClick={(e) => refresh(e)}>{textButton}</button>
    </div>
  );
};

export default RefreshPage;
