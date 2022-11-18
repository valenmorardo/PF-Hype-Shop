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

 
}

export default cardFiltrado;