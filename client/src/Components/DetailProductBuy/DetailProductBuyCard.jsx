import React from "react";

const DetailProductBuyCard = ({ title, image, brand, category, colors, gender, cantidad, price, externalMaterial }) => {
    return (
        <div className="flex flex-col w-[32rem] h-72 justify-center rounded-xl border border-solid border-gray-300 m-6">
            <p>{title}</p>
            <section className="flex">
                <div className="aspect-w-1 aspect-h-1  h-min w-[140px] overflow-hidden rounded-lg mx-2">
                    <img
                        src={image}
                        alt="imagem Producto"
                    // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div>
                    <p>Marca: <b>{brand}</b></p>
                    <p>Categoria: <b>{category}</b></p>
                    <p>Marca: <b>{brand}</b></p>
                    <p>Genero: <b>{gender}</b></p>
                </div>
            </section>

            <section>
                <p>Cantidad: 2</p>
                <p>Precio Total: $22333</p>
            </section>
            {console.log("DESDE UN LUGAR", image)}
        </div>
    )
}

export default DetailProductBuyCard;