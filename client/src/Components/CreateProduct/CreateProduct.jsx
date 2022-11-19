import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import swal from "sweetalert";
import { useDispatch } from 'react-redux'
import { CreateNewProduct } from '../../Redux/actions';
import style from "./CreateProduct.module.css"

// VALIDACIONES:
const validate = (input) => {
    let errores = {};
    console.log(errores)
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
    // else if (!input.thumbnail) {
    //     errores.thumbnail = "URL thumbnail is required";
    // }
    // else if (input.thumbnail.length < 5) {
    //     errores.thumbnail = "The URl must contain at least 5 letters";
    // }
    // else if (/^\s+$/.test(input.thumbnail)) {
    //     errores.thumbnail = "The URL cannot be a blank space";
    // }
    // else if (input.thumbnail.includes("https://")) {
    //     errores.thumbnail = "The URL must not contain the text 'https://'";
    // }
    // else if (input.thumbnail.includes("http://")) {
    //     errores.thumbnail = "The URL must not contain the text 'http://'";
    // }
    // else if (input.thumbnail.startsWith(" ")) {
    //     errores.thumbnail = "Dont input blank spaces";
    // }
    // else if (input.thumbnail.endsWith(" ")) {
    //     errores.thumbnail = "Dont input blank space";
    // }

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


    
    else if (input.externalMaterial.startsWith(" ")) {
        errores.externalMaterial = "Dont input blank spaces";
    }
    else if (input.externalMaterial.endsWith(" ")) {
        errores.externalMaterial = "Dont input blank space";
    }

    /*      SIZE         */
    // else if (input.size.length === 0) {
    //     errores.size = "The size is required";
    // }
    // else if (input.size === 0) {
    //     errores.size = "The size is not 0";
    // }
    // else if (input.size === null) {
    //     errores.size = "The size is required";
    // }
    // else if (parseInt(input.size) < 0) {
    //     errores.size = "The size must be a positive number";
    // }
    // else if (!isNumeric(input.size)) {
    //     errores.size = "The size must be a positive number";
    // }
    /*      DESCRIPTION      */
    // else if (!input.description) {
    //     errores.description = "the description is required";
    // }
    // else if (input.description.length < 20) {
    //     errores.description = "The description must contain at least 20 letters";
    // }
    // else if (/^\s+$/.test(input.description)) {
    //     errores.description = "The description cannot be a blank space";
    // }
    // else if (input.description.startsWith(" ")) {
    //     errores.description = "Dont input blank spaces";
    // }
    // else if (input.description.endsWith(" ")) {
    //     errores.description = "Dont input blank space";
    // }

    /*      SOTCK           */
    // else if (input.stock === 0) {
    //     errores.stock = "Stock is not 0";
    // }
    // else if (input.stock < 0) {
    //     errores.stock = "Stock is not less than 0";
    // }
}


const CreateProduct = () => {

    const history = useHistory()
    const dispatch = useDispatch()
    // para validaciones:
    const [error, setError] = useState({})
    const initialState = {
        thumbnail: "",
        localThumbnailInput:"",
        title: "",
        price: 0,
        condition: "new",
        picture: "",
        pictures: [],
        age_group: "",
        brand: "",
        color:"",
        colors: [],
        externalMaterial: "",
        shoeStyle: "Zapatilla",
        size:"",
        sizes:[],
        imgInput:0,
        laImg:0,
        iLocalPictures:[]
        // genero: "",
    }

    // ESTADO PRINCIPAL
    const [input, setInput] = useState(initialState);

    const handleRenderChangeLocal = (e) => {
        e.preventDefault();
        setInput({
         ...input,
         imgInput: true
        })
    }
    const LocalRender = () =>{
        return (
        <div>
    <button
    // {(e) => handleInputImgURL(e)}
    onClick={(e) => handleRenderChangeURL(e)}>Subir con URL</button>

           {/* {SubiendoImagenes()} */}
           {EditSesionUrl()}
    
    </div>)
  
    }

    const handleRenderChangeURL = (e) => {
        e.preventDefault();
        setInput({
         ...input,
         imgInput: false
        })
    }

    const URLRender = () =>{
        return (
        <div>
            <button
            // {(e) => handleInputImgLocal(e)}
    onClick={(e) => handleRenderChangeLocal(e)}>
    Subir img local
    </button>

    <input
                            type="text"
                            value={input.thumbnail}
                            className={style.field}
                            title="thumbnail"
                            onChange={(e) => handleChange(e)}
                        />
    
    </div>)
  
    }

    const RenderizadoBotones = () => {
        return(<div>
            <button
            // {(e) => handleInputImgLocal(e)}
    onClick={(e) => handleRenderChangeLocal(e)}>
    Subir img local
    </button>
    
    <button
    // {(e) => handleInputImgURL(e)}
    onClick={(e) => handleRenderChangeURL(e)}>Subir con URL</button>
    
    </div>)
    }
    

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

    // Funcion para Convertir numero en String y agregar "AR"
    const handleChangesizes = (e) => {
        e.preventDefault();
        let numerosizes = e.target.value;
        let numeroString = numerosizes.toString() + " AR";

        setInput({
            ...input,
            sizes: numeroString,
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
        // console.log("entrar input comprobacion")
        if (
            input.thumbnail &&
            input.title &&
            input.price &&
            input.condition &&
            input.pictures &&
            input.age_group &&
            input.brand &&
            input.colors &&
            input.externalMaterial &&
            input.shoeStyle &&
            input.sizes
        ) {
            return true;
        } else {
            return false;
        }
    }


    // AGE_GROUP
    const handleSelect = (e) => {
        setInput({
            ...input,
            age_group: e.target.value,
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

        // AÑADIR URL colors
        const hundleColorsAdd = (e) => {
            e.preventDefault();
            input.colors.push(input.color)
            setInput({
                ...input,
                color: ""
            })
    
        }

                // AÑADIR URL colors
                const hundleSizesAdd = (e) => {
                    e.preventDefault();
                    input.sizes.push(input.size)
                    setInput({
                        ...input,
                        size: ""
                    })
            
                }
                


    //  FUNCION PARA CREAR PRODUCTO
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            input.thumbnail &&
            input.title &&
            input.price &&
            input.condition &&
            input.pictures &&
            input.age_group &&
            input.brand &&
            input.colors &&
            input.externalMaterial &&
            input.shoeStyle &&
            input.sizes
        ) {

            dispatch(CreateNewProduct({
                thumbnail: input.thumbnail,
                title: input.title,
                price: input.price,
                condition: input.condition,
                pictures: input.pictures,
                age_group: input.age_group,
                brand: input.brand,
                colors: input.colors,
                externalMaterial: input.externalMaterial,
                shoeStyle: input.shoeStyle,
                sizes: input.sizes

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

    const [images, setimages] = useState("");

    useEffect( ()=>{
    //     setInput({
    //       ...input,
    //       thumbnail: images? images[0].url : ""
    //   })
    },[images])
      

     const EditSesionUrl=() => {
        
      
        const changeInput = (e) => {
          //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
          let indexImg;
      
          //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
          if (images.length > 0) {
            indexImg = images[images.length - 1].index + 1;
          } else {
            indexImg = 0;
          }
      
          let newImgsToState = readmultifiles(e);
          
          setimages(newImgsToState);
      
        //   console.log(newImgsToState);
        };
      
        function readmultifiles(e, indexInicial) {
          const files = e.currentTarget.files;
      
          //el array con las imagenes nuevas
          const arrayImages = [];
      
          Object.keys(files).forEach((i) => {
            const file = files[i];
      
            let url = URL.createObjectURL(file);
      
            //console.log(file);
            arrayImages.push({
              index: indexInicial,
              name: file.name,
              url,
              file
            });
      
            indexInicial++;
          });
      
          //despues de haber concluido el ciclo retornamos las nuevas imagenes
          return arrayImages;
        }
      
        function deleteImg(e) {
          //console.log("borrar img " + indice);
          e.preventDefault()
      setimages("")

        }
      
        return (
          <div className="container-fluid">
            <br></br>
            {/* INPUT IMAGES */}
            <label className="btn btn-warning">
              <span>Seleccionar archivos </span>
              <input hidden type="file" multiple onChange={changeInput}></input>
            </label>
      
            {/* VIEW IMAGES */}
           { images ? <div className="row">
              
                <div className="col-6 col-sm-4 col-lg-3 square" >
                  <div className="content_img">
                    <button
                      className="position-absolute btn btn-danger"
                      onClick={(e) => deleteImg (e)}
                    >
                      x
                    </button>
                    
                    <img
                      alt="algo"
                      src={images[0].url}
                      data-toggle="modal"
                      data-target="#ModalPreViewImg"
                      className="img-responsive"
                    ></img>
                  </div>
                </div>
              
            </div>
    :null }
          </div>
        );
      }
      const [pictures, setPictures] = useState([]);

      useEffect( ()=>{

    },[pictures])
      

    const EditSesionLocal=() =>  {
        
      
        const changeInput = (e) => {
          //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
          let indexImg;
      
          //aquí evaluamos si ya hay imagenes antes de este input, para saber en dónde debe empezar el index del proximo array
          if (pictures.length > 0) {
            indexImg = pictures[pictures.length - 1].index + 1;
          } else {
            indexImg = 0;
          }
      
          let newImgsToState = readmultifiles(e, indexImg);
          let newImgsState = [...pictures, ...newImgsToState];
          setPictures(newImgsState);
      
          console.log(newImgsState);
        };
      
        function readmultifiles(e, indexInicial) {
          const files = e.currentTarget.files;
      
          //el array con las imagenes nuevas
          const arrayImages = [];
      
          Object.keys(files).forEach((i) => {
            const file = files[i];
      
            let url = URL.createObjectURL(file);
      
            //console.log(file);
            arrayImages.push({
              index: indexInicial,
              name: file.name,
              url,
              file
            });
      
            indexInicial++;
          });
      
          //despues de haber concluido el ciclo retornamos las nuevas imagenes

          
          return arrayImages;
        }
      
        function deleteImg(indice) {
          //console.log("borrar img " + indice);
      
          const newImgs = pictures.filter(function (element) {
            return element.index !== indice;
          });
          ;
          setPictures(newImgs);
        }
      
        return (
          <div className="container-fluid">
            <br></br>
            {/* INPUT IMAGES */}
            <label className="btn btn-warning">
              <span>Seleccionar archivos </span>
              <input hidden type="file" multiple onChange={changeInput}></input>
            </label>
      
            {/* VIEW IMAGES */}
            <div className="row">
              {pictures.map((pictures) => (
                <div className="col-6 col-sm-4 col-lg-3 square" key={pictures.index}>
                  <div className="content_img">
                    <button
                      className="position-absolute btn btn-danger"
                      onClick={deleteImg.bind(this, pictures.index)}
                    >
                      x
                    </button>
                    <img
                      alt="algo"
                      src={pictures.url}
                      data-toggle="modal"
                      data-target="#ModalPreViewImg"
                      className="img-responsive"
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }
      const RenderizadoBotonesPictures = () => {
        return(<div>
            <button
            // {(e) => handleInputImgLocal(e)}
    onClick={(e) =>  handleRenderChangeLocalPictures(e)}>
    Subir img local
    </button>
    
    <button
    // {(e) => handleInputImgURL(e)}
    onClick={(e) => handleRenderChangeURLPictures(e)}>Subir con URL</button>
    
    </div>)
    }

    const handleRenderChangeLocalPictures = (e) => {
        e.preventDefault();
        setInput({
         ...input,
         laImg: true
        })
    }

    const handleRenderChangeURLPictures = (e) => {
        e.preventDefault();
        setInput({
         ...input,
         laImg: false
        })
    }

    const LocalRenderPictures = () =>{
        return (
        <div>
    <button
    // {(e) => handleInputImgURL(e)}
    onClick={(e) => handleRenderChangeURLPictures(e)}>Subir con URL</button>

           {/* {SubiendoImagenes()} */}
           {EditSesionLocal()}
    
    </div>)
  
    }

    const URLRenderPictures = () =>{
        return (
        <div>
            <button
            // {(e) => handleInputImgLocal(e)}
    onClick={(e) => handleRenderChangeLocalPictures(e)}>
    Subir img local
    </button>

    <input
                        type="text"
                        value={input.picture.url}
                        className={style.field}
                        title="picture"
                        onChange={(e) => handleChange(e)}
                    />
                    <button onClick={(e) => hundlePictureAdd(e)} > Añadir imagen</button>
    
    </div>)
  
    }
   

      const [localPictures,setLocalPictures] = useState([]);
      
      
       useEffect( ()=>{
        setInput({
            ...input,
            iLocalPictures: localPictures
        })
        

      },[localPictures])

const uploadImgLocal = async (files) => {
      let archivos =files.length -1
      let urls = []
      while(archivos > -1){

      const data = new FormData();
      data.append("file", files[archivos]?.file);
      data.append("upload_preset","images");
    // https://api.cloudinary.com/v1_1/dvh8g0fcw/image/upload
     
      
      const upload = await fetch("https://api.cloudinary.com/v1_1/dvh8g0fcw/image/upload",
      {
        method: "POST",
        body: data,
      });
    
      const file = await upload.json();
      console.log(upload);
     console.log(file.secure_url)
     urls.push(file.secure_url)
     archivos = archivos - 1
    }
     return urls
    }

     const subirImg = async(e) =>{
e.preventDefault(e)
console.log(images)
if(images){
    console.log(images)
    let thumbnailLocal = images
    let subirthumbnail =  await uploadImgLocal(thumbnailLocal)
    var fotito = subirthumbnail[0]
    console.log(fotito)

}

let fotosURl = input.pictures
      let  arr = pictures
        let urls = []

           let subir =  await uploadImgLocal(arr)
           setLocalPictures({
            localPictures, 
            localPictures: subir
           })

           setInput({
            ...input,
            iLocalPictures: localPictures
        })
        let pato = subir

        

       let pato2= pato.concat(fotosURl)

if(fotito){
pato2.unshift(fotito)}

       if(input.thumbnail){
        var thumbnaill= input.thumbnail
        console.log(thumbnaill)
        pato2.unshift(thumbnaill)
    }


        setInput({
            ...input,
            pictures: pato2
        })

        return urls
     }
    
    

    // --------------------------------------------------------------------------------------------
    // COMPONENTE RENDER
    return (
        < div className={style.containerMain} >
            {console.log("Errores", error)}
            <form className={style.form}
                
            >
                <h2 className={style.titulo}>Product Creation</h2>
    
                {/* TITLE */}
                <div>
                    <p>Title:</p>
{/*                     {error.title && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.title}</p>
                    )} */}
                    <input
                        type="text"
                        value={input.title}
                        className={style.field}
                        title="title"
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                {/* PRICE */}
                <div>
                    <p>Price: </p>
{/*                     {error.price && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>
                    )} */}
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
                {/* THUMBNAIL */}
                <div>
                    <div>
                        <p>Img:</p>
{/*                         {error.thumbnail && ( // si hay un error hara un <p> nuevo con el error
                            <p className={style.error}>{error.thumbnail}</p>
                        )} */}
{input.imgInput === 0 && <RenderizadoBotones/>} 
{input.imgInput === true && <LocalRender/>}
{input.imgInput === false && <URLRender/>}

                      
                    </div>
                    {/* BRAND */}
                    <div>
                        <p>Brand:</p>
{/*                         {error.brand && ( // si hay un error hara un <p> nuevo con el error
                            <p className={style.error}>{error.brand}</p>
                        )} */}
                        <input
                            type="text"
                            value={input.brand}
                            className={style.field}
                            title="brand"
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                </div>
                {/* colors */}

                <div>

                    <p>colors:</p>
 {/*                    {error.title && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.colors}</p>

                    )} */}
                    <input
                        type="text"
                        value={input.color}
                        className={style.field}
                        title="color"
                        onChange={(e) => handleChange(e)}
                    />
                    <button onClick={(e) => hundleColorsAdd(e)} > Añadir color</button>
                </div>
                {/* <div>
                    <p>Material Del Interior: </p>
                    {error.colors && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>
                    )}
                    <input
                        type="text"
                        value={input.materialesDelInterior}
                        className={style.field}
                        title="materialesDelInterior"
                        onChange={(e) => handleChange(e)}
                    />
                </div> */}
                {/* EXTERNALMATERIAAL */}
                <div>
                    <p>Material Del Exterior: </p>

{/*                     {error.colors && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.price}</p>

                    )} */}
                    <input
                        type="text"
                        value={input.externalMaterial}
                        className={style.field}
                        title="externalMaterial"
                        onChange={(e) => handleChange(e)}
                    />
                </div>


                      <div>
                    <p>sizes: </p>
{/*                     {error.title && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.colors}</p>
                    )} */}

                    <input
                        type="text"
                        value={input.size}
                        className={style.field}
                        title="size"
                        onChange={(e) => handleChange(e)}
                    />
                    <button onClick={(e) => hundleSizesAdd(e)} > Añadir size</button>
                </div>




                {/* CONDITION */}
                {/* <div className={style.select}>
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
                </div> */}

                {/* GENERO */}
                {/* <div className={style.select}>
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
                </div> */}

                {/* AGE_GROUP */}
                <div className={style.select}>
                    {input.age_group && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{"choose a age_group"}</p>
                    )}
                    <p>Select age_group Group:</p>
                    <select className={style.select} onChange={(e) => handleSelect(e)}>
                        <option selected disabled>
                            Select age_group Group
                        </option>
                        <option value="Adultos">Adultos</option>
                        <option value="Niños">Niños</option>
                    </select>
                </div>

                {/* PICTURES */}
                <div>
                    <p>Imagenes Adicionales:</p>
                    {/* {error.title && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.title}</p>
                    )} */}

{input.laImg === 0 && <RenderizadoBotonesPictures/>} 
{input.laImg === true && <LocalRenderPictures/>}
{input.laImg === false && <URLRenderPictures/>}

<button onClick={(e) => subirImg(e)}> fucion de subir</button>



                {/* ARRAY PICTURES  */}
                 <div className={style.pictures}>
                    {input.pictures?.map(el =>  //cada vez que coloquemos una opcion se creara una pequeña lista 
                        <div key={el} className={style.divName}>
                            <p>{el}</p>
                            <button className={style.btnX} onClick={() => handleDelete(el)}>X</button>
                        </div>)}
                </div>

                </div>
                {/* BUTTON */}
                {
/*                     Object.keys(error).length === 0 &&
                        comprobacionInput(input)
                        ? ( */
                            <button
                                className={style.submit}

                                type="submit"
                                onClick={(e) => handleSubmit(e)}
                            >
                                Create New Product
                            </button>
                        /* ) : (
                            <p className={style.todosCampos}>
                                You must fill in all the fields, to be able to Create your product
                            </p>
                        ) */
                }


                {/* ARRAY PICTURES */}
                {/* <div className={style.pictures}>
                    {input.pictures?.map(el =>  //cada vez que coloquemos una opcion se creara una pequeña lista 
                        <div key={el} className={style.divName}>
                            <p>{el}</p>
                            <button className={style.btnX} onClick={() => handleDelete(el)}>X</button>
                        </div>)}
                </div> */}

            </form >
        </div >
    );
}


export default CreateProduct;