import React from "react";
import UsuariosCardAdmin from "./usuario.jsx";



const UsuariosCardsAdmin = ({ users}) => {



  return (

    // </div>
    <div className="bg-white">
      <div className="absolute w-10/12 top-2 right-0">

        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-40 md:mt-0 md:text-6xl md:font-medium md:border-0 md:bg-white">
          <li>
          <span className="block py-2 pl-3 pr-10 text-yellow-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ">Usuario</span>
          </li>
          <li>
          <span className="block py-2 pl-3 pr-10 text-yellow-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ">E-mail</span>
          </li>
          <li>
          <span className="block py-2 pl-3 pr-10 text-yellow-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ">Estado</span>
          </li>
          <li>
          <span className="block py-2 pl-3 pr-10 text-yellow-800 rounded hover:bg-gray-100 md:hover:bg-transparent md:p-0 ">Tipo</span>
          </li>
          
        </ul>

            <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              {users?.map((e) => (
                
                  <UsuariosCardAdmin {...e} />     
                ))}
            </div>
      </div>
  </div>
  );
};

export default UsuariosCardsAdmin;