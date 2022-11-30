import { useEffect } from "react";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {


  // -usuario toda la informacion
  // carrito
  // precio total del carrito


  useEffect(() => {
    localStorage.clear()
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
