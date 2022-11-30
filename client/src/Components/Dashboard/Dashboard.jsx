import React, { useState, useEffect } from 'react'
import img from "../../Img/HypeShop2.png";
import IsAuthenticated from "../NavBar/Registrar/IsAuthenticated";
import { Link } from "react-router-dom";
import CatalogoAdmin from "./CatalogoAdmin"
import styles from "./Dashboard.module.css";
import UsuariosDashboard from './usuarios/usuariosDashboard';
import { useSelector } from 'react-redux';
import PageNoAdmin from '../PageNoAdmin/PageNoAdmin';

const Dashboard = () => {
  const [funcionalidades, setFuncionalidades] = useState("Productos");

  const user = useSelector((state) => state.currentUser)
  return (
    <div>{user && user.isAdmin === true ?
      < div className={styles.container} >
        {console.log(user)}
        <div div className="flex items-left p-[40px] text-3xl border-r  border-white-200  border-r-4 w-2/12" >
          <ul>
            <li className="mb-8">
              <button value="Productos" onClick={() => setFuncionalidades("Productos")} > Productos</button>
            </li>
            <li className="mb-8">
              <button value="Usuarios" onClick={() => setFuncionalidades("Usuarios")}> Usuarios</button>
            </li>
          </ul>
        </div >
        <div className="" >
          {funcionalidades === "Productos" && <div className="m-100%" ><CatalogoAdmin /></div>}
          {funcionalidades === "Usuarios" && <div className="m-100%"><UsuariosDashboard /></div>}
        </div>
      </div > : <PageNoAdmin />}
    </div >
  )
}







export default Dashboard;