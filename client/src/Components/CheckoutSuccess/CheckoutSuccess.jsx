import { useEffect } from "react";
import { Link } from "react-router-dom";
import useLocalStorage from "../useLocalStorage/useLocalstorage";
import { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CreateOrder } from "../../Redux/actions";
const CheckoutSuccess = () => {


  // -usuario toda la informacion
  // carrito
  // precio total del carrito

  const dispatch = useDispatch();

  const [usuario, saveUser] = useLocalStorage("USUARIO", " ");
  const [item, saveItem] = useLocalStorage("SNEAKERS", []);

  const totalPrice = (item) => {
    const arrayPrecio = item.map((it) => it.price * it.cantidad);
    const sumaTotal = arrayPrecio.reduce((a, b) => a + b, 0);
    return Math.trunc(sumaTotal);
  };

  let precio = totalPrice(item)

  
  // "{"carrito":[{"title":"Zapatillas Para Hombre Jaguar 4325 Color Verde - Adulto 43 Ar","id":"ecad0881-9dee-4d33-bd3d-0c07ba6026df","price":9819,"sold_quantity":5,"condition":"new","pictures":["http://http2.mlstatic.com/D_800260-MLA49260581435_032022-O.jpg","http://http2.mlstatic.com/D_648638-MLA48346156852_112021-O.jpg","http://http2.mlstatic.com/D_707742-MLA48346254494_112021-O.jpg"],"available_quantity":1,"visible":0,"attributes":[{"id":8,"name":"Edad","value":"Adultos","productId":"ecad0881-9dee-4d33-bd3d-0c07ba6026df"},{"id":9,"name":"Marca","value":"Jaguar","productId":"ecad0881-9dee-4d33-bd3d-0c07ba6026df"},{"id":11,"name":"Materiales del exterior","value":"Tela","productId":"ecad0881-9dee-4d33-bd3d-0c07ba6026df"},{"id":12,"name":"Género","value":"Hombre","productId":"ecad0881-9dee-4d33-bd3d-0c07ba6026df"},{"id":13,"name":"Talle","value":"43 AR","productId":"ecad0881-9dee-4d33-bd3d-0c07ba6026df"},{"id":14,"name":"Estilo","value":"Deportivo","productId":"ecad0881-9dee-4d33-bd3d-0c07ba6026df"},{"id":10,"name":"Color","value":"Verde","productId":"ecad0881-9dee-4d33-bd3d-0c07ba6026df"}],"variations":[],"reviews":[],"cantidad":1}],"precioTotal":9819,"usuarioId":"5d01647a-8f3d-4a47-a114-243a1f79f532"}"
  useEffect(() => {
    dispatch(CreateOrder({carrito: item, precioTotal: precio, usuarioId: usuario.id}))
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
