import React, { useEffect } from "react";
import { getDetail } from "../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CardDetail = (props) => {
  const dispatch = useDispatch();
  const sneakerDetail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

  const id = props.match.params.id;

  console.log(sneakerDetail);
  // console.log(Object.keys(sneakerDetail))

  if (id.length !== 36) {

    return (
      <div>
        <h1>No existe producto con ese ID</h1>
        <Link to="/home">
          <button>VOLVER</button>
        </Link>
      </div>
    );

  } else
    return (

      <div>
        {sneakerDetail ? (
          <div>
            <Link to="/home">
              <button>VOLVER</button>
            </Link>

            <h1>{sneakerDetail.title}</h1>
            <div>
              {sneakerDetail.pictures?.map((e) => (
                <img src={e} />
              ))}
            </div>

            <div>
              <div>
                <span>TIPO DE CALZADO: {sneakerDetail.shoeStyle}</span>
                <br />
                <span>MARCA: {sneakerDetail.brand}</span>
                <br />
                <span>TALLA: {sneakerDetail.size}</span>
                <br />
                <span>PRECIO: ${sneakerDetail.price} ARS</span>
                <br />
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      
    );
};

export default CardDetail;
