import React, { useEffect, useState } from "react";
import { getDetail, addCarry, detailZero } from "../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import { useHistory } from "react-router-dom";
import ShowReview from "./ShowReviews/ShowReview";
// CARRITO:
import useLocalStorage from "../useLocalStorage/useLocalstorage";
import swal from "sweetalert";
import Variations from "./Variations/Variations";

const CardDetail = (props) => {
  const dispatch = useDispatch();
  const sneakerDetail = useSelector((state) => state.detail);
  const history = useHistory();

  const [variationChoosen, setVariationChoosen] = useState(sneakerDetail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
    setVariationChoosen(sneakerDetail);
    // desmontando Componente:
    return () => {
      // arrow para poder ejecutarlo
      dispatch(detailZero());
    };
  }, [dispatch]);

  useEffect(() => {
    setVariationChoosen(sneakerDetail);
  }, [sneakerDetail]);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // CARRITO:
  const [item, saveItem] = useLocalStorage("SNEAKERS", []);

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

  const onAddCarry = (sneaker) => {
    if (sneaker.available_quantity > 0) {
      let carryItem = item.find((elem) => elem.id === sneaker.id);
      // console.log("item", newItem)
      if (carryItem) {
        if (carryItem.cantidad <= sneaker.available_quantity - 1) {
          const itemIndex = item.findIndex((it) => it.id === sneaker.id);
          const newItem = [...item];
          newItem.splice(itemIndex, 1);
          newItem.push({
            ...carryItem,
            cantidad: carryItem.cantidad + 1,
          });
          saveItem(newItem);
          return swal(
            "¡Agregaste de nuevo este Producto!",
            `Tu nueva Cantidad es: ${carryItem.cantidad + 1}`,
            "success"
          );
        }
        if (carryItem.cantidad === sneaker.available_quantity) {
          return swal(
            "No Stock",
            "Tienes Todo el Stock que está disponible en tu Carrito.",
            "error"
          );
        }
      } else {
        const newItem = [...item];
        newItem.push({
          ...sneaker,
          cantidad: 1,
        });
        saveItem(newItem);
        return swal(
          "Producto Agregado!",
          "Este producto ahora Hace parte de tu Carrito!",
          "success"
        );
      }
    } else {
      return swal(
        "No Stock",
        "Tienes Todo el Stock que está disponible en tu Carrito.",
        "error"
      );
    }

    // return console.log(carryItem)
    // console.log("añadir carrito")
    // dispatch(addCarry(sneakerDetail))
  };

  const buy = (sneaker) => {
    if (sneaker.available_quantity > 0) {
      let carryItem = item.find((elem) => elem.id === sneaker.id);
      // console.log("item", newItem)
      if (carryItem) {
        if (carryItem.cantidad <= sneaker.available_quantity - 1) {
          const itemIndex = item.findIndex((it) => it.id === sneaker.id);
          const newItem = [...item];
          newItem.splice(itemIndex, 1);
          newItem.push({
            ...carryItem,
            cantidad: carryItem.cantidad + 1,
          });
          saveItem(newItem);
          history.push("/orderCarry");
          return (
            swal(
              "¡Agregaste de nuevo este Producto!",
              `Tu nueva Cantidad es: ${carryItem.cantidad + 1}`,
              "success"
            ),
            history.push("/orderCarry")
          );
        }
        if (carryItem.cantidad === sneaker.available_quantity) {
          return swal(
            "No Stock",
            "Tienes Todo el Stock que está disponible en tu Carrito.",
            "error"
          );
        }
      } else {
        const newItem = [...item];
        newItem.push({
          ...sneaker,
          cantidad: 1,
        });
        saveItem(newItem);
        history.push("/orderCarry");
        return swal(
          "Producto Agregado!",
          "Este producto ahora Hace parte de tu Carrito!",
          "success"
        );
      }
    } else {
      return swal(
        "No Stock",
        "Tienes Todo el Stock que está disponible en tu Carrito.",
        "error"
      );
    }
  };

  const handleVariationChange = (sneaker) => {
    setVariationChoosen(sneaker);
  };

  return (
    <>
      {variationChoosen.id ? (
        <div className="bg-white">
          <div className="pt-6">
            {/* Image gallery */}
            <Carousel infinite={true} responsive={responsive}>
              {sneakerDetail.pictures?.map((e) => (
                <div>
                  <img src={e} alt="i" />
                </div>
              ))}
            </Carousel>
            {/* Product info */}
            <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                  {sneakerDetail.title}
                </h1>
              </div>
              {console.log(sneakerDetail)}
              {console.log("Variaciones", variationChoosen)}
              {/* Options */}
              <div className="mt-4 lg:row-span-3 lg:mt-0">
                <h2 className="sr-only">Product information</h2>
                <p className="   border border-blue-600  rounded-lg   font-semibold px-5 py-2.5 text-center mr-2  mb-3 text-3xl tracking-tight  text-gray-900">
                  PRECIO: ${sneakerDetail.price}
                </p>

                {sneakerDetail.variations.length ? (
                  <Variations
                    handleVariationChange={handleVariationChange}
                    variationChoosen={variationChoosen}
                    variations={sneakerDetail.variations}
                  />
                ) : (
                  <p className=" text-blue-700  text-sm  font-bold px-5 py-2.5 text-center mr-2 ">
                    Stock disponible: {sneakerDetail.available_quantity}
                  </p>
                )}

                {variationChoosen.variations.length === 0 ? (
                  <button
                    type="submit"
                    onClick={() =>
                      onAddCarry({
                        title: sneakerDetail.title,
                        ...variationChoosen,
                      })
                    }
                    className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white border border-transparent rounded-md bg-lime-500 hover:bg-lime-400 focus:outline-none "
                  >
                    Añadir Carrito
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() =>
                      swal(
                        "No has elegido el color y el talle!",
                        "Primero tienes que elegir el color y el talle",
                        "error"
                      )
                    }
                    className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none "
                  >
                    Añadir Carrito
                  </button>
                )}

                {variationChoosen.variations.length === 0 ? (
                  <button
                    type="submit"
                    onClick={() =>
                      buy({
                        title: sneakerDetail.title,
                        ...variationChoosen,
                      })
                    }
                    className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 "
                  >
                    Comprar
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() =>
                      swal(
                        "No has elegido el color y el talle!",
                        "Primero tienes que elegir el color y el talle",
                        "error"
                      )
                    }
                    className="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-red-500 border border-transparent rounded-md hover:bg-red-600 focus:outline-none "
                  >
                    Comprar
                  </button>
                )}

                {/* </form> */}
              </div>

              <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                {/* Description and details */}
                <div className="mt-10">
                  <h3 className="text-4xl font-semibold text-blue-600">
                    Detalles:
                  </h3>

                  <ul className="pl-4 mt-10 space-y-2 text-sm list-none">
                    {sneakerDetail?.attributes?.map((attribute) => (
                      <li className="text-gray-400">
                        <span className="text-xl font-medium text-gray-900">
                          {attribute.name} : {attribute.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <ShowReview reviews={sneakerDetail.reviews} />
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default CardDetail;

