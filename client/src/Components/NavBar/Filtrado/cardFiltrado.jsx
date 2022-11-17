import React from 'react'
import styles from '../Filtrado/cardFiltrado.module.css'



const cardFiltrado = ({options, titulo, handler }) => {

  return (

    <>
        <div >
          <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ' onChange={e => {handler(e.target.value)} } >
            <option disabled selected>{titulo}</option>
                {options.map((e) => (            
                    <option value={e}>{e}</option>
                ))}  
                
          </select>
        </div>
    </>

  )


    {/* <>
    <h1 className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-400">FILTROS</h1>
  <div className={styles.selects}>
    <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => handleOrderByAlpha(e)}>
      <option hidden value="all">Nombre</option>
        <option value="aToz">A-Z </option>
        <option value="zToa">Z-A </option>
      </select><br />

      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => handleOrderByGeneros(e)}>
        <option hidden value="all">Genero</option>
        <option value="Hombre">Masculino</option>
        <option value="Mujer">Femenino </option>
        <option value="Sin género">Unisex</option>
      </select>

     
      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'onChange={(e) => handleOrderByPrecios(e)}>
        <option hidden value="all">Precio</option>
        <option value="mayor">Mayor a menor</option>
        <option value="menor">Menor a mayor</option>
      </select>

      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => mostrarMarcas(e)}>
        <option hidden value="all">Marca</option>
        <option value="Jaguar">Jaguar</option>
        <option value="Araquina">Araquina</option>
        <option value="Fila">Fila</option>
        <option value="Topper">Topper</option>
      </select>

      <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' onChange={(e) => handleCategories(e)} >
        <option hidden value="all">Categorias</option>
        <option value="Deportivo">Deportivo</option>
        <option value="Urbano">Urbano</option>
      </select>

    </div>
</> */}

 
}

export default cardFiltrado;