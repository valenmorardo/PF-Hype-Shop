import React from "react";
import MakeReview from "./MakeReview/MakeReview";

const UserOrder = () => {

  return (
    <div>
      <MakeReview/> {/* Componente (boton) para hacer review, se renderizara uno por cada producto q haya en el detalle de compra del usuario. 
                        Lo renderizo aca momentaneamente*/}
    </div>
  );
};

export default UserOrder;
