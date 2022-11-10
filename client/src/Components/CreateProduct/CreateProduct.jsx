import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import swal from "sweetalert";
import { useDispatch } from 'react-redux'
import { CreateNewProduct } from '../../Redux/actions';
import style from "./CreateProduct.module.css"

function CreateProduct() {

    const dispatch = useDispatch()
    // para validaciones:
    const [error, setError] = useState({})
    const initialState = {
        id: Math.floor(Math.random() * 1000),
        name: "",
        price: "",
        image: "",
        brand: "",
        gender: "",
        stock: 0,
        size: "",
        description: "",
    }

    // ESTADO PRINCIPAL
    const [input, setInput] = useState(initialState);

    // Funcion para Cambiar Estado Principal
    const handleChange = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        // Validacion:
        // setError(
        //     validate({
        //         ...input,
        //         [e.target.name]: e.target.value,
        //     })
        // );
    }

    //comprobacion de INPUT que todo este Completo

    const comprobacionInput = (input) => {
        console.log("entrar input comprobacion")
        if (
            input.name &&
            input.price &&
            input.image &&
            input.brand &&
            input.gender &&
            input.stock &&
            input.size &&
            input.description
        ) {
            return true;
        } else {
            return false;
        }
    }

    // AUMENTAR STOCK
    const handleAumentar = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            stock: input.stock += 1
        });
        // validacion Error
        // setError(
        //     validate({
        //         ...input,
        //         stock: input.stock
        //     }));
    }

    // DISMINUIR STOCK
    const handleDecrementar = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            stock: input.stock -= 1
        });
        // validacion ERROR
        // setError(
        //     validate({
        //         ...input,
        //         stock: input.stock
        //     }))
    }

    // TALLE
    const handleSelectSize = (e) => {
        setInput({
            ...input,
            size: e.target.value
        })
    }

    // GENERO
    const handleSelect = (e) => {
        // PARA CATEGORIA:
        // dispatch(getCategorys());
        // let CategorysG = categorys.filter(element => element.gender === e.target.value);

        setInput({
            ...input,
            // categorysGender: CategorysG,
            gender: e.target.value,
            // nameCategory: "Disable",
        });
    }

    //  FUNCION PARA CREAR PRODUCTO
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            input.name &&
            input.price &&
            input.image &&
            input.brand &&
            input.gender &&
            input.stock &&
            input.size &&
            input.description
        ) {
            dispatch(CreateNewProduct({
                name: input.name,
                price: input.price,
                image: input.image,
                brand: input.brand,
                gender: input.gender,
                stock: input.stock,
                size: input.size,
                description: input.description,
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
                    <p>Name:</p>
                    {/* {error.name && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.name}</p>
                    )} */}
                    <input
                        type="text"
                        value={input.name}
                        className={style.field}
                        name="name"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div>
                    <p>Price: </p>
                    {/* {error.price && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>
                    )} */}
                    <input
                        type="number"
                        min="0"
                        step="25"
                        className={style.field}
                        value={input.price}
                        name="price"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <div>
                        <p>Img:</p>
                        {/* {error.image && ( // si hay un error hara un <p> nuevo con el error
                            <p className={style.error}>{error.image}</p>
                        )} */}
                        <input
                            type="text"
                            value={input.image}
                            className={style.field}
                            name="image"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <p>brand:</p>
                        {/* {error.brand && ( // si hay un error hara un <p> nuevo con el error
                            <p className={style.error}>{error.brand}</p>
                        )} */}
                        <input
                            type="text"
                            value={input.brand}
                            className={style.field}
                            name="brand"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>

                <div className={style.select}>
                    {/* {input.gender.length === 0 && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{"choose a gender"}</p>
                    )} */}
                    <p>Select Gender:</p>
                    <select className={style.select} onChange={(e) => handleSelect(e)}>
                        <option selected disabled>
                            Select Gender
                        </option>
                        <option value="Men">Men</option>
                        <option value="Women">Women</option>
                    </select>
                </div>

                {/* DESCRIPTION */}
                <section className={style.ContainTextarea}>
                    <p>Description: </p>
                    {/* {error.description && ( // si hay un error hara un <p> nuevo con el error
                            <p className={style.error}>{error.description}</p>
                        )} */}
                    <textarea
                        name="description"
                        value={input.description}
                        onChange={(e) => handleChange(e)}
                        className={style.contactTextarea}
                        placeholder="Description Product"
                        cols="30"
                        rows="8">
                    </textarea>
                </section>


                {/* STOCK */}

                <p className={style.stockTitle}>Create Stock:</p>
                <div className={style.stockContainerPrincipal}>
                    <p className={style.stockNumberContain}>stock Product:  <span className={style.stockNumber}>{input.stock}</span></p>
                    {/* {error.stock && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.stock}</p>
                    )} */}
                    <section>
                        <button className={style.buttonStock} onClick={(e) => handleAumentar(e)}>+</button>
                        <button className={style.buttonStock} onClick={(e) => handleDecrementar(e)} >-</button>
                    </section>
                </div>

                {/* TALLE */}

                <div className={style.select}>
                    {/* {input.size.length === 0 && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{"choose a Size"}</p>
                    )} */}
                    <p>Select Size:</p>
                    <select className={style.select} onChange={(e) => handleSelectSize(e)}>
                        <option selected disabled>
                            Select size
                        </option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>


                {/* BUTTON */}
                {Object.keys(error).length === 0 && comprobacionInput(input) ? (
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
                )}

                {/* <button className={style.submit} type='submit' onClick={(e) => handleSubmit(e)}>Create New Product</button> */}
            </form >
        </div>
    );
}


export default CreateProduct