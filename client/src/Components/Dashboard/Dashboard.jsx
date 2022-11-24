import React, { useState, useEffect } from 'react'
import img from "../../Img/HypeShop2.png";
import IsAuthenticated from "../NavBar/Registrar/IsAuthenticated";
import { Link } from "react-router-dom";
import CatalogoAdmin from "./CatalogoAdmin"
import styles from "./Dashboard.module.css";


const Dashboard = () => {
  const [funcionalidades, setFuncionalidades] = useState("Productos");
  return(
    <div className={styles.container} >
<div>
      <nav className="bg-white border-gray-200 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 mt-2">
          <a href="/" className="flex items-center">
            <img src={img} className="mr-3 h-6 sm:h-9" alt="HypeShop Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap ">
              HypeShop
            </span>
          </a>
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-10 text-sm font-medium items-center">
              <li>
                <Link to="/">
                  <a
                    href="#"
                    className="text-gray-900hover:underline"
                    aria-current="page"
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/createProduct">
                  <a href="#" className="text-gray-900hover:underline">
                    Vender Producto
                  </a>
                </Link>
              </li>
              <li>

              </li>
              <li>

              </li>     
            </ul>
          </div>
          <IsAuthenticated />
        </div>
      </nav>

    </div>

  <div className ="flex items-left p-[40px] text-3xl border-r  border-white-200  border-r-4 w-2/12"  >
    <ul>
      <li className="mb-8">
        <button value = "Productos" onClick={() => setFuncionalidades("Productos")} > Productos</button>    
      </li>
      <li className="mb-8">
        <button value = "Usuarios" onClick={() =>setFuncionalidades("Usuarios")}> Usuarios</button> 
      </li>
    </ul>
  </div>
  
  {funcionalidades === "Productos" && <div className ={styles.catalogo}><CatalogoAdmin/></div>}
  

    </div>
  )
}







export default Dashboard;

