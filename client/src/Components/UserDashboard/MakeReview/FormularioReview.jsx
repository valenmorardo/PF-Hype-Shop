import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { CreateReview } from "../../../Redux/actions";

const FormularioReview = ({closeModal}) => {

  const dispatch = useDispatch();

  const [puntaje, setPuntaje] = useState(null);
  const [review, setReview] = useState({
    productId: 'fa1c985e-6643-4d46-b2f9-558e8a4a88a2',
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
      setPuntaje(null);
      setReview({});
      closeModal()
    } else {
      alert('llene todos los campos porfavor')
    }
  }


  return (

    <div align="center">
      <h1 className="mt-0 font-bold tracking-tight text-[#f15a24] sm:text-4xl my-6">REALIZE SU REVIEW</h1>
      
      <form>
        <div>
          <label className="mt-0 font-bold tracking-tight text-[#000000] sm:text-2xl my-6">Titulo: </label>
          <input
          className="bg-gray-50 border border-orange-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 mb-5"
            type="text"
            placeholder="EJ: excelente..."
            name="title"
            onChange={(e) => handleChange(e)}
          ></input>
        </div>

        <div>
          <label className="mt-0 font-bold tracking-tight text-[#000000] sm:text-2xl my-6">Contenido: </label>
          <textarea
          className="bg-gray-50 border border-orange-600 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mb-5" 
            placeholder="EJ: muy buen producto, buena calidad..."
            name="content"
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>

        <div>
          <label className="mt-0 font-bold tracking-tight text-[#000000] sm:text-2xl my-6">Puntaje: </label>

            <Box
              sx={{
                "& > legend": { mt: 2 },
              }}
            >
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
      <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-6' onClick={(e) => handleSubmit(e)}>Enviar</button>

    </div>
  );
};

export default FormularioReview;
