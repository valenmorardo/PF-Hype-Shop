import React from "react";
import iconCart from "../../images/icon-cart.svg";
import BubbleAlert from "./BubbleAlert";
import useLocalStorage from "../../useLocalStorage/useLocalstorage";


const CarryIcon = () => {

    const [item, saveItem] = useLocalStorage("SNEAKERS", []);

    const cantidad = item.length;
    return (
        <>
            <img className='w-7 h-auto object-cover' src={iconCart} />
            <span className='relative bottom-3 right-3' >
                {cantidad !== 0 ?
                    <BubbleAlert value={cantidad} />
                    : null
                }
            </span>
        </>
    )
}

export default CarryIcon