import React from "react"
import CardModal from "./CardModal"
import CardDetailModal from "./CardDetailModal"

// title, pictures, price, id

const ModalPrevisualizar = ({ setModalPrev, title, price, picture, brand, gender, condition, externalMaterial, age_group, pictures, colors, sizes }) => {
    return (
        <div className="z-20 bg-white max-w-full min-h-[120rem] absolute top-0 bottom-0 right-0 left-0 rounded-2xl">
            <button className="mt-4 ml-6 flex w-auto items-center justify-center rounded-md border border-transparent bg-[#f15a24]  py-2 px-6 text-xl font-medium text-white hover:bg-orange-500 focus:outline-none  " onClick={() => setModalPrev(false)}>Cerrar Visualizacion</button>
            <div className="flex flex-col max-w-full items-center gap-6">
                <p className="font-bold tracking-tight sm:text-3xl mt-3 text-gray-900 ">Vista Home</p>
                <section className="flex w-[22rem] h-[24rem] justify-start rounded-xl border border-solid border-gray-300">
                    {/* <p>Home</p> */}
                    <div className="w-[22rem]">
                        <CardModal
                            id={"#"}
                            title={title || "Titulo Ejemplo"}
                            price={price || "Precio Referencia"}
                            picture={picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKUErAv44hPwiYpizUUMMU3hrOFZlzLjMcZL5JwKl1EA4KZAW"}
                        />
                    </div>
                </section>
                <p className="font-bold tracking-tight sm:text-3xl mt- text-gray-900 ">Vista Detalle</p>
                <section className="rounded-xl border border-solid border-gray-300 w-11/12 px-3">
                    <div className="w-full mt-6">
                    {console.log(pictures)}
                        <CardDetailModal
                            pictures={(pictures.length === 0) ? ["https://vignette2.wikia.nocookie.net/invizimals/images/6/64/Ejemplo.png/revision/latest?cb=20110924141453&path-prefix=es", "https://vignette2.wikia.nocookie.net/invizimals/images/6/64/Ejemplo.png/revision/latest?cb=20110924141453&path-prefix=es", "https://vignette2.wikia.nocookie.net/invizimals/images/6/64/Ejemplo.png/revision/latest?cb=20110924141453&path-prefix=es"] : [picture, ...pictures]}
                            title={title || "titulo Referencia"}
                            sizes={(sizes.length === 0) ? ["TallaRef", "TallaRef"] : sizes}

                            price={price || "Precio Referencia"}
                            // Debemos Cambiar la Cantidad
                            available_quantity={6}
                            brand={brand || "Marca Referencia"}
                            gender={gender || "Genero Referencia"}
                            condition={condition || "Condicion Referencia"}
                            age_group={age_group || "Edad Referencia"}
                            externalMaterial={externalMaterial || "Material Referencia"}
                            colors={(colors.length === 0) ? ["ColorRef", "ColorRef"] : colors}
                        />
                    </div>
                </section>
            </div>
        </div >
    )
}

export default ModalPrevisualizar