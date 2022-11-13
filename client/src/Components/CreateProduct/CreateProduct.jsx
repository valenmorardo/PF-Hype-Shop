import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import swal from "sweetalert";
import { useDispatch } from 'react-redux'
import { CreateNewProduct } from '../../Redux/actions';
import style from "./CreateProduct.module.css"

// VALIDACIONES:
const validate = (input) => {
    let errores = {};
    let priceValidate;
    function isNumeric(value) {
        return /^-?\d+$/.test(value);
    }
    // for (let i = 0; i < input.price.length; i++) {
    //     let index = input.price.charAt(i)
    //     if(index>='0' && index<='9'){
    //         priceValidate = true
    //     } else {
    //         priceValidate = false
    //     }
    // }
    /*      title      */

    if (!input.title) {
        errores.title = "title Product is required";
    }
    else if (input.title.length < 3) {
        errores.title = "The title must contain at least 3 letters";
    }
    else if (/^\s+$/.test(input.title)) {
        errores.title = "The title cannot be a blank space";
    }
    else if (!/^[a-zA-Z ]*$/.test(input.title)) {
        errores.title = "The title must only contain letters";
    }
    else if (input.title.startsWith(" ")) {
        errores.title = "Dont input blank spaces";
    }
    else if (input.title.endsWith(" ")) {
        errores.title = "Dont input blank space";
    }

    /*      PRICE         */
    else if (input.price.length === 0) {
        errores.price = "The Price is required";
    }
    else if (input.price === 0) {
        errores.price = "The Price is not 0";
    }
    else if (input.price === null) {
        errores.price = "The Price is required";
    }
    else if (input.price < 0) {
        errores.price = "The price must be a positive number";
    }
    else if (!isNumeric(input.price)) {
        errores.price = "The price must be a positive number";
    }

    /*    IMG    */
    else if (!input.thumbnail) {
        errores.thumbnail = "URL thumbnail is required";
    }
    else if (input.thumbnail.length < 5) {
        errores.thumbnail = "The URl must contain at least 5 letters";
    }
    else if (/^\s+$/.test(input.thumbnail)) {
        errores.thumbnail = "The URL cannot be a blank space";
    }
    else if (input.thumbnail.includes("https://")) {
        errores.thumbnail = "The URL must not contain the text 'https://'";
    }
    else if (input.thumbnail.includes("http://")) {
        errores.thumbnail = "The URL must not contain the text 'http://'";
    }
    else if (input.thumbnail.startsWith(" ")) {
        errores.thumbnail = "Dont input blank spaces";
    }
    else if (input.thumbnail.endsWith(" ")) {
        errores.thumbnail = "Dont input blank space";
    }

    /*    brand   */
    else if (!input.brand) {
        errores.brand = "brand title is required";
    }
    else if (input.brand.length < 3) {
        errores.brand = "The brand title must contain at least 3 letters";
    }
    else if (/^\s+$/.test(input.brand)) {
        errores.brand = "The brand title cannot be a blank space";
    }
    else if (!/^[a-zA-Z ]*$/.test(input.brand)) {
        errores.brand = "The brand title must only contain letters";
    }
    else if (input.brand.startsWith(" ")) {
        errores.brand = "Dont input blank spaces";
    }
    else if (input.brand.endsWith(" ")) {
        errores.brand = "Dont input blank space";
    }

    /*      DESCRIPTION      */
    else if (!input.description) {
        errores.description = "the description is required";
    }
    else if (input.description.length < 20) {
        errores.description = "The description must contain at least 20 letters";
    }
    else if (/^\s+$/.test(input.description)) {
        errores.description = "The description cannot be a blank space";
    }
    else if (input.description.startsWith(" ")) {
        errores.description = "Dont input blank spaces";
    }
    else if (input.description.endsWith(" ")) {
        errores.description = "Dont input blank space";
    }

    /*      SOTCK           */
    else if (input.stock === 0) {
        errores.stock = "Stock is not 0";
    }
    else if (input.stock < 0) {
        errores.stock = "Stock is not less than 0";
    }

    return errores; // retornamos lo errores
}


const CreateProduct = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    // para validaciones:
    const [error, setError] = useState({})
    const initialState = {
        title: "",
        thumbnail: "",
        price: 0,
        condition: "",
        picture: "",
        pictures: [],
        age_group: "",
        brand: "",
        color: "",
        externalMaterial: "",
        shoeStyle: "",
        size: "",

        // genero: "",
    }

    // ESTADO PRINCIPAL
    const [input, setInput] = useState(initialState);

    // Funcion para Cambiar Estado Principal
    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.title]: e.target.value,
        })
        // Validacion:
        setError(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        );
    }

    //comprobacion de INPUT que todo este Completo

    const comprobacionInput = (input) => {
        console.log("entrar input comprobacion")
        if (
            input.title &&
            input.price &&
            input.thumbnail &&
            input.brand &&
            input.genero &&
            input.stock
            // FALTAN ATRIBUTOS
        ) {
            return true;
        } else {
            return false;
        }
    }


    // GENERO
    const handleSelect = (e) => {
        // PARA CATEGORIA:
        // dispatch(getCategorys());
        // let CategorysG = categorys.filter(element => element.genero === e.target.value);

        setInput({
            ...input,
            // categorysgenero: CategorysG,
            genero: e.target.value,
            // titleCategory: "Disable",
        });
    }

    // ELIMINAR URL Picture
    const handleDelete = (el) => {
        setInput({
            ...input,
            pictures: input.pictures.filter(name => name !== el)
        });
    }

    // AÑADIR URL Pictures
    const hundlePictureAdd = (e) => {
        e.preventDefault();
        input.pictures.push(input.picture)
        setInput({
            ...input,
            picture: ""
        })

    }

    //  FUNCION PARA CREAR PRODUCTO
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            input.title &&
            input.price &&
            input.thumbnail &&
            input.brand &&
            input.genero &&
            input.stock &&
            input.size &&
            input.description
        ) {
            dispatch(CreateNewProduct({
                title: input.title,
                price: input.price,
                brand: input.brand,
                genero: input.genero,

                // Talle filtrable
                // attributes: [{ title: "edad", value: input.edad }, { title: "brand", value: input.brand }, { title: "Color", value: input.color }, { title: "Materiales del exterior", value: input.externalMaterial }, { title: "Tipo de calzado", value: input.TipoDeCalzado }]
            }));
            swal({
                title: "Product created successfully!",
                icon: "success",
                button: "Ok",
            });
            setInput(initialState);
            history.push("/");
        } else alert(" missing data for the creation of a new product");
    }

    return (
        < div className={style.containerMain} >
            {/* {console.log(error)} */}
            <form className={style.form}
                onSubmit={(e) => handleSubmit(e)}
            >
                <h2 className={style.titulo}>Product creation</h2>
                {console.log(input)}
                <div>
                    <p>title:</p>
                    {error.title && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.title}</p>
                    )}
                    <input
                        type="text"
                        value={input.title}
                        className={style.field}
                        title="title"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <p>Price: </p>
                    {error.price && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>
                    )}
                    <input
                        type="number"
                        min="0"
                        step="25"
                        className={style.field}
                        value={input.price}
                        title="price"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <div>
                        <p>Img:</p>
                        {error.thumbnail && ( // si hay un error hara un <p> nuevo con el error
                            <p className={style.error}>{error.thumbnail}</p>
                        )}
                        <input
                            type="text"
                            value={input.thumbnail}
                            className={style.field}
                            title="thumbnail"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <p>brand:</p>
                        {error.brand && ( // si hay un error hara un <p> nuevo con el error
                            <p className={style.error}>{error.brand}</p>
                        )}
                        <input
                            type="text"
                            value={input.brand}
                            className={style.field}
                            title="brand"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                <div>
                    <p>Color: </p>
                    {error.color && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>
                    )}
                    <input
                        type="text"
                        value={input.color}
                        className={style.field}
                        title="color"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <p>Material Del Interior: </p>
                    {error.color && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>
                    )}
                    <input
                        type="text"
                        value={input.materialesDelInterior}
                        className={style.field}
                        title="materialesDelInterior"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <p>Material Del Exterior: </p>
                    {error.color && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>
                    )}
                    <input
                        type="text"
                        value={input.externalMaterial}
                        className={style.field}
                        title="externalMaterial"
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                {/* CONDICION */}
                <div className={style.select}>
                    {input.condition.length === 0 && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{"choose a Condition"}</p>
                    )}
                    <p>Select Condition:</p>
                    <select className={style.select} onChange={(e) => handleSelect(e)}>
                        <option selected disabled>
                            Select Condition
                        </option>
                        <option value="Nuevo">Nuevo</option>
                        <option value="Usado">Usado</option>
                    </select>
                </div>

                {/* GENERO */}
                <div className={style.select}>
                    {input.genero.length === 0 && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{"choose a genero"}</p>
                    )}
                    <p>Select genero:</p>
                    <select className={style.select} onChange={(e) => handleSelect(e)}>
                        <option selected disabled>
                            Select genero
                        </option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </div>

                {/* EDAD */}
                <div className={style.select}>
                    {input.edad.length === 0 && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{"choose a edad"}</p>
                    )}
                    <p>Select Edad:</p>
                    <select className={style.select} onChange={(e) => handleSelect(e)}>
                        <option selected disabled>
                            Select Edad
                        </option>
                        <option value="Adultos">Adulto</option>
                        <option value="Niños">Niño</option>
                    </select>
                </div>

                <div>
                    <p>Imagenes Adicionales:</p>
                    {error.title && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.title}</p>
                    )}
                    <input
                        type="text"
                        value={input.picture}
                        className={style.field}
                        title="picture"
                        onChange={(e) => handleChange(e)}
                    />
                    <button onClick={(e) => hundlePictureAdd(e)} > Añadir imagen</button>
                </div>

                {/* BUTTON */}
                {
                    Object.keys(error).length === 0 && comprobacionInput(input) ? (
                        <button
                            className={style.submit}

                            type="submit"
                            onClick={(e) => handleSubmit(e)}
                        >
                            Create New Product
                        </button>
                    ) : (
                        <p className={style.todosCampos}>
                            You must fill in all the fields, to be able to Create your product
                        </p>
                    )
                }

                {/* Array Pictures */}
                <div className={style.pictures}>
                    {input.pictures.map(el =>  /**cada vez que coloquemos una opcion se creara una pequeña lista */
                        <div key={el} className={style.divName}>
                            <p>{el}</p>
                            <button className={style.btnX} onClick={() => handleDelete(el)}>X</button>
                        </div>)}
                </div>

            </form >
        </div >
    );
}


export default CreateProduct