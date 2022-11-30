import React from "react";
import { deshabilitarUser, habilitarUser, getUsers, darAdmin, sacarAdmin } from "../../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";


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
    <div className="relative">
            
            {/* <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-40 md:mt-0 md:text-2xl md:font-medium md:border-0 md:bg-white">
              <li>
             <span className="block py-2 pl-3 pr-1 text-white-800  w-10">{name}</span>
              </li>
              <li>
              <span className="block py-2 pl-3 pr-10 text-white-800 ">{email}</span>
              </li>

              <li>
              <span className="block py-2 pl-3 pr-10 text-white-800 ">{isActive.toString()}</span>
              </li>

              <li>

              {isAdmin === false &&<span className="block py-2 pl-3 pr-10 text-white-800 ">Cliente</span>}

              {isAdmin === true &&<span className="block py-2 pl-3 pr-10 text-white-800 ">Admin</span>}

              </li>
            </ul> */}

          
             
             <span className="block py-2 pl-3 pr-1 text-white-800 flex w-35 md:text-2xl">{name}</span>
             
             <p className="block py-2 pl-3 pr-10 text-white-800 absolute -left-100">{email}</p>
              {/* <p className="block py-2 pl-3 pr-10 text-white-800 absolute right-50">{email}</p> */}
              

              
              <span className="block py-2 pl-3 pr-10 text-white-800 ">{isActive.toString()}</span>
              

             

              {isAdmin === false &&<span className="block py-2 pl-3 pr-10 text-white-800 ">Cliente</span>}

              {isAdmin === true &&<span className="block py-2 pl-3 pr-10 text-white-800 ">Admin</span>}

           
              


              {isActive === true && <button className = {""} onClick={(e) => deshabilitar (e)}>Deshabilitar</button>}

              {isActive === false && <button className = {""} onClick={(e) => habilitarBtn (e)}>Habilitar</button>}

 
              {isAdmin === false && <button className = {""} onClick={(e) => darAdminBtn (e)} >Dar Admin</button> }
             


              {isAdmin === true && <button className = {""} onClick={(e) => sacarAdminBtn (e)} >Sacar Admin</button> }
              
             
              
              </div>
        
  )
}
// 

export default UsuariosCardAdmin;
