import React from 'react'
import { Link } from 'react-router-dom';
import useLocalStorage from '../useLocalStorage/useLocalstorage';
import OrderCarryCard from './OrderCarryCard';
// import { useSelector, useDispatch } from "react-redux";

function OrderCarry() {

    // const ItemsCarry = useSelector((state) => state.carryItems);
    const [item, saveItem] = useLocalStorage("SNEAKERS", []);


    const onDeleteCarry = (id) => {
        const itemIndex = item.findIndex((it) => it.id === id);
        const newItems = [...item];
        newItems.splice(itemIndex, 1)
        saveItem(newItems)
    }
    const pruebaConsole = () => {
        console.log("Prueba Carry")
    }

    return (
        <div>{item && item.length >= 1 ?
            <div div className='flex content-center flex-col flex-wrap bg-slate-50 ' >
                {console.log("Carrito", item)}
                <p className='font-bold tracking-tight sm:text-4xl mt-3 text-indigo-700'>TU CARRITO</p>
                {item && item.map(el => (
                    <OrderCarryCard
                        key={el.id}
                        id={el.id}
                        title={el.title}
                        image={el.thumbnail}
                        brand={el.brand}
                        condicion={el.condition}
                        externalMaterial={el.externalMaterial}
                        price={el.price}
                        onDeleteCarry={onDeleteCarry}
                    />
                ))}
            </div>
            :
            <div>
                <p className=" font-bold tracking-tight text-gray-900 sm:text-7xl mt-20">Carrito Vacio</p>
                <p className='font-bold tracking-tight text-gray-900 sm:text-4xl '>Agrega Productos <Link to="/">
                    <a href="#" className="text-gray-900 dark:text-white hover:underline  hover:text-indigo-700 focus:outline-none  " aria-current="page">AQUI</a>
                </Link></p>

            </div>
        }
        </div>

    )
}

export default OrderCarry