import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createReview } from "../../Redux/actions";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { CreateReview } from "../../Redux/actions";

const MakeReview = ({idProduct}) => {

  const dispatch = useDispatch();

  const [puntaje, setPuntaje] = useState(null);
  const [review, setReview] = useState({
    productId: idProduct
  })

 

  function handleChange(e) { 
    setReview({
        ...review,
        [e.target.name]: e.target.value
    })
    console.log(review);

  }


  function handleSubmit(e) {
    e.preventDefault();

    if(Object.values(review).length) {
      dispatch(CreateReview(review))
      setReview({});
    } else {
      alert('llene todos los campos porfavor')
    }
  }


  return (

    <div align="center">
      <h1>REALIZE SU REVIEW</h1>

      <form>
        <div>
          <label>Titulo: </label>
          <input
            type="text"
            placeholder="EJ: excelente..."
            name="title"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div>
          <label>Contenido: </label>
          <textarea
            placeholder="EJ: muy buen producto, buena calidad..."
            name="content"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>

        <div>
          <label>Puntaje: </label>

            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
              <Typography component="legend">Controlled</Typography>
              <Rating
                name="rate"
                value={puntaje}
                onChange={(e, newValue) => {
                  setPuntaje(newValue);
                  handleChange(e);
                }}
              />
            </Box>
        </div>
      </form>

      <button onClick={(e) => handleSubmit(e)}>Enviar</button>
    </div>
  );
};

export default MakeReview;
