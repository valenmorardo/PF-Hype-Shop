import React from "react";
import DetailProductBuyCard from "./DetailProductBuyCard";

const DetailProductBuy = ({ onClose, products }) => {
    const array = [1, 2, 3, 4, 5, 6, 7, 7, 87, 535, 434, 434]
    return (
        <div className="z-20 bg-white max-w-full bg-contain min-h-[120rem] absolute top-0 bottom-0 right-0 left-0 rounded-2xl">
            <div className="">
                <div className="absolute left-0 top-4">
                    <button
                        onClick={() => onClose()}
                        className="mt-2 ml-6 flex w-3 items-center justify-center rounded-md border border-transparent bg-[#f15a24]  py-2 px-9 text-base font-medium text-white hover:bg-orange-500 focus:outline-none  "
                    >
                        Cerrar
                    </button>
                </div>
                <div className="flex flex-col items-center  ">
                    <p className="mt-3 font-bold tracking-tight text-indigo-700 sm:text-4xl mb-6" >Detalle Compra</p>
                    <div className="flex justify-center flex-wrap w-11/12 h-5/6 gap-4 ">
                        {products.length > 0 && array.map((el) => (
                            <DetailProductBuyCard
                                title={el.title}
                            />
                        ))}
                    </div>
                    {console.log(products)}
                </div>
            </div>
        </div >
    )
}

export default DetailProductBuy;