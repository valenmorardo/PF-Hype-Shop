import React from "react";
import { deshabilitarUser, habilitarUser, getUsers, darAdmin, sacarAdmin } from "../../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import styles from "./usuario.module.css"


const UsuariosCardAdmin = ({ email, isActive, isAdmin, name, id }) => {

  const dispatch = useDispatch();
const deshabilitar= (e) => {
  e.preventDefault();
  dispatch(deshabilitarUser({id}))
  dispatch(getUsers())

}

const habilitarBtn= (e) => {
  e.preventDefault();
  dispatch(habilitarUser({id}))
  dispatch(getUsers())

}
const darAdminBtn = (e) => {
  e.preventDefault();
  dispatch(darAdmin({id}))
  dispatch(getUsers())
}

const sacarAdminBtn = (e) => {
  e.preventDefault();
  dispatch(sacarAdmin({id}))
  dispatch(getUsers())
}


  return (
    <div className={styles.container}>
                  
             <span className={styles.name}>{name}</span>
             
             <p className={styles.email}>{email}</p>
              
              <span className={styles.estado}>{isActive === true? "Habilitado": "Deshabilitado"}</span>
                     
              <span className={styles.tipo}>{isAdmin === false ?"Cliente":"Admin"}</span>


              {isActive === true && <button className = {styles.btnEstado} onClick={(e) => deshabilitar (e)}>Deshabilitar</button>}

              {isActive === false && <button className = {styles.btnEstado} onClick={(e) => habilitarBtn (e)}>Habilitar</button>}

              {isAdmin === false && <button className = {styles.btnTipo} onClick={(e) => darAdminBtn (e)} >Dar Admin</button> }

              {isAdmin === true && <button className = {styles.btnTipo} onClick={(e) => sacarAdminBtn (e)} >Sacar Admin</button> }
                
              </div>
        
  )
}
// 

export default UsuariosCardAdmin;
