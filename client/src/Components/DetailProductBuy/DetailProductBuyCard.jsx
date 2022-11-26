import React from "react";

const DetailProductBuyCard = ({ title }) => {
    return (
        <div className="flex w-60 h-72 justify-center rounded-xl border border-solid border-gray-300 mb-6">
            <div>
                <section>
                    <div className="aspect-w-1 aspect-h-1  h-min w-[140px] overflow-hidden rounded-lg">
                        <img
                            src=" https://cdn-icons-png.flaticon.com/512/1160/1160040.png?w=740&t=st=1662562187~exp=1662562787~hmac=4e81ab45c142d4e1ba117cc74f05df4bfa43bd3ec69b23769d5443b1cb0f0529"
                            alt="imagem Producto"
                        // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                </section>
                <section></section>
            </div>
            {console.log("DESDE UN LUGAR", title)}
        </div>
    )
}

export default DetailProductBuyCard;