import React, { useState, useEffect } from 'react'
import img from "../../Img/HypeShop2.png";
import IsAuthenticated from "../NavBar/Registrar/IsAuthenticated";
import { Link } from "react-router-dom";
import CatalogoAdmin from "./CatalogoAdmin"
import styles from "./Dashboard.module.css";
import UsuariosDashboard from './usuarios/usuariosDashboard';
import { useSelector } from 'react-redux';
import PageNoAdmin from '../PageNoAdmin/PageNoAdmin';
import Error404 from '../error404/error404';



const Dashboard = () => {
  const [funcionalidades, setFuncionalidades] = useState("Productos");
  
  const user = useSelector((state) => state.currentUser)
  return(
    <div>
    {/* {user && user.isAdmin === false ? */}
    <div className="flex justify-around" >

  <div className ="mt-10 flex items-left  text-3xl   border-white-200  border-r-4 w-1/12"  >
    <ul>
      <li className="mb-8 font-bold">
        <button className ={styles.btn} value = "Productos" onClick={() => setFuncionalidades("Productos")} > Productos</button>    
      </li>
      <li className="mb-8 font-bold">
        <button className ={styles.btn2} value = "Usuarios" onClick={() =>setFuncionalidades("Usuarios")}> Usuarios</button> 
      </li>
       <li className="mb-8 font-bold">
        <button className ={styles.btn3} value = "Ordenes" onClick={() =>setFuncionalidades("Ordenes")}> Ordenes</button> 
      </li>
      <Link to = "/createProduct">
      <li className="mb-8 font-bold">
        <button className ={styles.btn4} > Vender Productos</button> 
      </li>
      </Link>
      
    </ul>
  </div>
  <div className="w-2/3" >
  {funcionalidades === "Productos" && <div className ="" ><CatalogoAdmin/></div>}
  {funcionalidades === "Usuarios" && <div className =""><UsuariosDashboard/></div>}

  </div>
  </div>
  {/* :<Error404/>} */}
  </div>
  )
}


export default Dashboard;