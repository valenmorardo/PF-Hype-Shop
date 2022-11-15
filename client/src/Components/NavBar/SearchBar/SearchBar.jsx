import React from "react";
import { getSearchTitle } from "../../../Redux/actions/index"
import { useState } from "react";
import { useDispatch } from "react-redux";
import style from "./SearchBar.module.css";

export default function SearchBar({paginaUno}) {
   const dispatch = useDispatch();
   const [title, SetTitle] = useState("");

   function handleInputChange(e) {
      e.preventDefault();
      SetTitle(e.target.value);
   }

   function handleSubmit(e) {
      e.preventDefault();
      
      dispatch(getSearchTitle(title));

      SetTitle("");
      paginaUno();
   }

   return (
      // <div className={style.containSearchBar}>
      //    <section className={style.mainInput}>
      //       {console.log(title)}
      //       {/* <p>Hola MUNDO</p> */}
      //       <div className={style.mainInputContainer}>
      //          <input
      //             type="text"
      //             value={title}
      //             placeholder="Search Sneaker"
      //             onChange={(e) => handleInputChange(e)}
      //          />
      //       </div>
      //    </section>
      //    <section className={style.mainButtons}>
      //       <button
      //          onClick={(e) => handleSubmit(e)}
      //          type="submit"
      //          outline="none"
      //       >
      //          Search
      //       </button>
      //    </section>
      // </div>

//HAY QUE AGRAGAR LOS FILTROS
  // <div className="flex">
  //   <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
  //   <button id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">Filtros<svg aria-hidden="true" className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>
  //   <div id="dropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden data-popper-escaped data-popper-placement="bottom" style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(0px, 710px)'}}>
  //     <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button">
  //       <li>
  //         <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mockups</button>
  //       </li>
  //       <li>
  //         <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Templates</button>
  //       </li>
  //       <li>
  //         <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Design</button>
  //       </li>
  //       <li>
  //         <button type="button" className="inline-flex py-2 px-4 w-full hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Logos</button>
  //       </li>
  //     </ul>
  //   </div>
  //   <div className="relative w-full">
  //     <input onChange={(e) => handleInputChange(e)} value={title} type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Buscar..." required />
  //     <button  onClick={(e) => handleSubmit(e)} type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  //       <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  //       <span className="sr-only">Search</span>
  //     </button>
  //   </div>
  // </div>

<form>   
<label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Buscar</label>
<div class="relative">
    <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
    </div>
    <input  onChange={(e) => handleInputChange(e)} value={title} type="search" id="default-search" class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
    <button onClick={(e) => handleSubmit(e)} type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
</div>
</form>



) }
