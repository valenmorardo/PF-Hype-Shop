import React from 'react'
import useLocalStorage from '../useLocalStorage/useLocalstorage';
// import { useSelector, useDispatch } from "react-redux";

function OrderCarry() {

    // const ItemsCarry = useSelector((state) => state.carryItems);
    const [item, saveItem] = useLocalStorage("SNEAKERS", []);

    return (
        <>{
            item && item.map(el => (
                <p>{el.id}</p>
            ))
        }
            <div>Aqui se Renderizan Productos y Sus Estilos</div>
            <h2>Falta:</h2>
            {console.log("Items CARRITO", item)}
            <ul>
                <li>Renderizar Card</li>
                <li>Aumentar/Decrementar</li>
                <li>Volver a /home</li>
                <li>Comprar</li>
            </ul>
        </>
    )
}

export default OrderCarry