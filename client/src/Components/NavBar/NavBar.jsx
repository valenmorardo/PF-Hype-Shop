import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import Filtrado from "./Filtrado/Filtrado";
import img from "../../Img/HypeShop2.png";
import IsAuthenticated from "../NavBar/Registrar/IsAuthenticated";
import CarryIcon from "./CarryIcon/CarryIcon";
import { useState } from "react";
import Profile from "./Registrar/Profile";
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "./Registrar/LoginButton";
import LogoutButton from "./Registrar/LogoutButton";


import { Link } from "react-router-dom";




const NavBar = () => {

  const { user, isAuthenticated} = useAuth0();

  const handleMenu = () =>{
    const menu = document.querySelector('#mobile-menu-2')
    menu.classList.toggle('hidden')
  }

  const handleMenu2 = () => {
    const menu = document.querySelector('#user-dropdown')
    menu.classList.toggle('hidden')
  }


  return (
    <div className="sticky top-0 z-20">
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <img src={img}  className="h-9 mr-3 " alt="HypeShop Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap">HypeShop</span>
          </a>
          <div className="flex items-center md:order-2 ">
            <button onClick={handleMenu2} type="button" className="flex mr-3 text-sm bg-white rounded-full md:mr-0  " id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
              <span className="sr-only">Open user menu</span>
             <IsAuthenticated/>
            </button>
            {/* Dropdown menu */}
            {isAuthenticated?
            <div className="absolute right-4 top-12 z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " id="user-dropdown">
              <div className="px-4 py-3">
                <span className="block text-sm text-gray-900 ">{user.name}</span>
                <span className="block text-sm font-medium text-gray-500 truncate ">{user.email}</span>
              </div>
              <ul className="py-1" aria-labelledby="user-menu-button">
                <li>
                  <Link to='/orders'>
                  <span  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Productos Comprados</span>
                  </Link>
                </li>
                <li>
                  <Link to='/favorites'>
                  <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ">Favoritos</span>
                  </Link>
                </li>
                <li>
                 <LogoutButton/>
                </li>
              </ul>
            </div>  
            :
            <div className=" absolute right-4 top-12 z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow " id="user-dropdown">
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 ">Usuario Anonimo</span>
              <span className="block text-sm font-medium text-gray-500 truncate ">Anonimo@HypeShop.com</span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              <li>
                <LoginButton/>
              </li>
            </ul>
          </div>
            }
            <button onClick={handleMenu} id="user-menu-button2" data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="mobile-menu-2" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
              <Link to="/">
                <span className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0   " >Inicio</span>
                </Link>
              </li>
              <li>
              <Link to="/createProduct">
                <span className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 ">Vender Producto</span>
                </Link>
              </li>
              <li>
              <Link to="/contactUs">
                <span className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 "> Contáctanos</span>
                </Link>
              </li>
              <li>
              <Link to="/about">
                <span  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-600 md:p-0 ">Nosotros</span>
                </Link>
              </li>
              <li>
              <Link to="/orderCarry">
                  <span className="text-gray-900 dark:text-white m-0 inline-flex"><CarryIcon /></span>
                  </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
    </div>
  );
};

export default NavBar;
