import React from 'react'
import SearchBar from './SearchBar/SearchBar';
import Filtrado from './Filtrado/Filtrado';
import img from '../../Img/HypeShop2.png'



import { Link } from 'react-router-dom';

const NavBar = ({paginaUno}) => {
  return (
        // <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">   
        //     <div>
        //         {/* <SearchBar/> */}
        //         <Filtrado/>
        //         <Link to='/createProduct'> <button> Create Product </button></Link>
        //         <Link to='/about'> <button> ABOUT </button></Link>
        //     </div>
        // </nav>

<div>
  <nav className="bg-white border-gray-200 dark:bg-stone-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
      <a href="/" className="flex items-center">
        <img src={img} className="mr-3 h-6 sm:h-9" alt="HypeShop Logo" />
        <span className="self-center text-xl  font-semibold whitespace-nowrap dark:text-white tracking-widest">HypeShop</span>
      </a>
      <div className="flex items-center">
        <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
          <li>
            <Link to="/">
            <a href="#" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
            </Link>
          </li>
          <li>
            <Link to='/createProduct'>
            <a href="#" className="text-gray-900 dark:text-white hover:underline">Vender Producto</a>
            </Link>
          </li>
          {/* <li>
            <a href="#" className="text-gray-900 dark:text-white hover:underline">Team</a>
          </li> */}
          <li>
            <Link to='/about' >
            <a href="#" className="text-gray-900 dark:text-white hover:underline">Sobre nosotros</a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center">
        <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline">Registrarse</a>
      </div>
    </div>
  </nav>
  <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
  
        <SearchBar paginaUno={paginaUno}/>
    </div>
  </nav>
</div>
    
  )
}

export default NavBar;
