import React from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../useLocalStorage/useLocalstorage";
import OrderCarryCard from "./OrderCarryCard";
import PayButton from "../PayButton/PayButton";
// import { useSelector, useDispatch } from "react-redux";

function OrderCarry() {
  // const ItemsCarry = useSelector((state) => state.carryItems);
  const [item, saveItem] = useLocalStorage("SNEAKERS", []);

  const onDeleteCarry = (id) => {
    const itemIndex = item.findIndex((it) => it.id === id);
    const newItems = [...item];
    newItems.splice(itemIndex, 1);
    saveItem(newItems);
  };

  const totalPrice = (item) => {
    const arrayPrecio = item.map((it) => it.price * it.cantidad);
    const sumaTotal = arrayPrecio.reduce((a, b) => a + b, 0);
    return sumaTotal;
  };

  const addCarryNewQuantity = (id, cantidad) => {
    const arrayNewQuantity = [];
    item.forEach((it) => {
      if (it.id === id) {
        arrayNewQuantity.push({
          ...it,
          cantidad: cantidad,
        });
      } else {
        arrayNewQuantity.push(it);
      }
    });
    saveItem(arrayNewQuantity);
  };

  // let priceFinal = totalPrice(item);

  return (
    <div className=" bg-slate-50">
      <Link to="/" className="absolute left-0 top-4">
        <button
          type="submit"
          className="mt-2 ml-6 flex w-3 items-center justify-center rounded-md border border-transparent bg-[#f15a24]  py-2 px-9 text-base font-medium text-white hover:bg-orange-500 focus:outline-none  "
        >
          Volver
        </button>
      </Link>
      <p className="mt-3 font-bold tracking-tight text-indigo-700 sm:text-4xl">
        TU CARRITO
      </p>
      {item && item.length >= 1 ? (
        <div div className="flex flex-row justify-evenly">
          <div className="flex flex-col flex-wrap content-center">
            {console.log("Carrito", item)}
            {/* {console.log("PruebaCarry", pruebaConsole('f8c9604c-e137-406d-bd70-a295d4378461', 4))} */}
            {item &&
              item.map((el) => (
                <OrderCarryCard
                  key={el.id}
                  id={el.id}
                  title={el.title}
                  image={el.pictures[0]}
                  brand={el.brand}
                  condicion={el.condition}
                  externalMaterial={el.externalMaterial}
                  price={el.price}
                  cantidad={el.cantidad}
                  onDeleteCarry={onDeleteCarry}
                  available_quantity={el.available_quantity}
                  priceFinal={totalPrice(item)}
                  saveItem={saveItem}
                  addCarryNewQuantity={addCarryNewQuantity}
                />
              ))}
          </div>
          <div className="mt-10 w-1/5 h-[400px] sticky top-3 rounded-xl border border-solid border=[#e6e8eb]">
            <p className="mt-5 font-bold tracking-tight text-gray-900 sm:text-4xl ">
              Tu Orden
            </p>
            <p className="mt-3 font-bold tracking-tight text-gray-400 sm:text-lg ">
              Revisa que se encuentren todos los productos que Agregaste
              anteriormente y ver que todo esté Correcto, antes de Realizar la
              Compra.
            </p>
            <p className="mt-3 font-bold tracking-tight text-gray-900 sm:text-2xl ">
              Total:
            </p>
            <p className="mt-3 font-bold tracking-tight text-indigo-700 sm:text-2xl">
              ${totalPrice(item)}
            </p>
            {/* COMPRAR */}
            <PayButton cartItems={item} />
          </div>
        </div>
      ) : (
        <div>
          <p className="mt-20 font-bold tracking-tight text-gray-900 sm:text-7xl">
            Carrito Vacio
          </p>
          <p className="font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Agrega Productos{" "}
            <Link
              to="/"
              className="text-gray-900 dark:text-white hover:underline hover:text-indigo-700 focus:outline-none "
              aria-current="page"
            >
              AQUI
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}

export default OrderCarry;

