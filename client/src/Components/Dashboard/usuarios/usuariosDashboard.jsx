import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../Redux/actions/index";
import UsuariosCardsAdmin from "./listaUsuarios.jsx";




const UsuariosDashboard = () => {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.allUsers);

  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(users)
  return(
    <div>
     

<UsuariosCardsAdmin users = { users }/>

    </div>
  )

}


export default UsuariosDashboard;