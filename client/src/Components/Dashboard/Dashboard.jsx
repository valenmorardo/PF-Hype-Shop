import React, { useState, useEffect } from 'react'
import img from "../../Img/HypeShop2.png";
import IsAuthenticated from "../NavBar/Registrar/IsAuthenticated";
import { Link } from "react-router-dom";
import CatalogoAdmin from "./CatalogoAdmin"
import styles from "./Dashboard.module.css";
import UsuariosDashboard from './usuarios/usuariosDashboard';



const Dashboard = () => {
  const [funcionalidades, setFuncionalidades] = useState("Productos");
  return(
    
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
  )
}







export default Dashboard;