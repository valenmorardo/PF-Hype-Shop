import { useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../useLocalStorage/useLocalstorage";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CreateOrder } from "../../Redux/actions";

import { useLocation } from "react-router-dom";

const CheckoutSuccess = () => {


  // -usuario toda la informacion
  // carrito
  // precio total del carrito
  const location = useLocation();
  console.log(location)
  const dispatch = useDispatch();

  const [usuario, saveUser] = useLocalStorage("USUARIO", " ");
  const [item, saveItem] = useLocalStorage("SNEAKERS", []);

  const totalPrice = (item) => {
    const arrayPrecio = item.map((it) => it.price * it.cantidad);
    const sumaTotal = arrayPrecio.reduce((a, b) => a + b, 0);
    return Math.trunc(sumaTotal);
  };

  let precio = totalPrice(item)

  

  useEffect(() => {
    if(location.search === "?paid=true") {
      dispatch(CreateOrder({carrito: item, precioTotal: precio, usuarioId: usuario.id}))
      localStorage.clear()
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-screen-md min-h-[80vh] m-auto">
      <h2 className="mb-2 text-5xl text-green-400">
        Pago realizado correctamente
      </h2>
      <p>Su orden puede demorar un tiempo en procesarse.</p>
      <p>Podras ver el estado de tu orden en tu perfil dentro de 10 minutos.</p>
      <p>
        En caso de surgir algun inconveniente puede contactarnos !{" "}
        <strong>support@hypeshop.com</strong>
      </p>
      <Link to="/">
        <button className="px-8 py-1 mt-8 text-2xl text-white bg-cyan-600 rounded-2xl">
          Volver al inicio
        </button>
      </Link>
    </div>
  );
};

export default CheckoutSuccess;
