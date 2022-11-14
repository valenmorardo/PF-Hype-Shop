import React, { useEffect } from "react";
import { getDetail } from "../../Redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "react-multi-carousel";

const CardDetail = (props) => {
  const dispatch = useDispatch();
  const sneakerDetail = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDetail(props.match.params.id));
  }, [dispatch, props.match.params.id]);

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


  console.log(sneakerDetail);

    return (

    <>
      {
          sneakerDetail.id ?
          (
      <div className="bg-white">
        
      <div className="pt-6">
       

        {/* Image gallery */}
        {/* <section id="skills">
         <div >
            <Carousel
               responsive={responsive}
               infinite={true}
              
            >
               
               <div >
                  <img src={sneakerDetail?.pictures[0]} alt="Image Skill" />
               </div>
               <div >
                  <img src={sneakerDetail?.pictures[1]} alt="Image Skill" />
                
               </div>
               <div >
                  <img src={sneakerDetail?.pictures[2]} alt="Image Skill" />
               </div>
            </Carousel>
         </div>
      </section> */}
        {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
            <img
              src={sneakerDetail?.pictures[0]}
              alt={sneakerDetail?.pictures[0]}
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={sneakerDetail?.pictures[1]}
                alt={sneakerDetail?.pictures[1]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
              <img
                src={sneakerDetail?.pictures[2]}
                alt={sneakerDetail?.pictures[2]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="aspect-w-4 aspect-h-5 sm:overflow-hidden sm:rounded-lg lg:aspect-w-3 lg:aspect-h-4">
            <img
              src={sneakerDetail?.pictures[3]}
              alt={sneakerDetail?.pictures[3]}
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div> */}

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{sneakerDetail.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">PRECIO: ${sneakerDetail.price}</p>

              {/* Sizes */}
              <div className="mt-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium text-gray-900">TALLA</h3>
                  <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {sneakerDetail.size}
                  </a>
                </div>

              </div>

              <button
                type="submit"
                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
               Comprar
              </button>
          {/* </form> */}
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
            {/* Description and details */}
            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Detalles</h3>

              <div className="mt-4">
                <ul  className="list-disc space-y-2 pl-4 text-sm">
                 
                    <li className="text-gray-400">
                      <span className="text-gray-600">Marca: {sneakerDetail.brand}</span>
                    </li>
                    <li className="text-gray-400">
                    <span className="text-gray-600">Color: {sneakerDetail.color}</span>
                    </li>
                    <li className="text-gray-400">
                    <span className="text-gray-600">Condicion: {sneakerDetail.condition}</span>
                    </li>
                    <li className="text-gray-400">
                    <span className="text-gray-600">Estilo: {sneakerDetail.shoeStyle}</span>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)

        : <div>Cargando ...</div>
      }
    </>
    );
};

export default CardDetail;

