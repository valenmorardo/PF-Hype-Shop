import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch, useSelector} from "react-redux";
import { CreateNewProduct } from "../../Redux/actions";
import style from "./CreateProduct.module.css";
import { getBrands, getCategories, getGenders } from "../../Redux/actions";
// Previsualizar
import ModalPrevisualizar from "./ModalPrevisualizar/ModalPrevisualizar";

const CreateProduct = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const brand = (useSelector((state) => state.brands)).filter(e => e != 'Todos');
  const category = (useSelector((state) => state.categories)).filter(e => e != 'Todos');
  const gender = (useSelector((state) => state.genders)).filter(e => e != 'Todos');


  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getGenders());
  }, [dispatch]);
  
  // para validaciones:
  const [error, setError] = useState({});
  const initialState = {
    thumbnail: "",
    localThumbnailInput: "",
    title: "",
    price: 0,
    condition: "new",
    picture: "",
    pictures: [],
    age_group: "",
    brand: "",
    color: "",
    colors: [],
    externalMaterial: "",
    shoeStyle: "Zapatilla",
    size: "",
    sizes: [],
    imgInput: 0,
    laImg: 0,
    iLocalPictures: [],
    genero: "",
    category: "",
    available_quantity: 6,
    variations:[],
    variacionesRender:0,
  };

  // ESTADO PRINCIPAL
  const [input, setInput] = useState(initialState);
  // PREVISUALIZAR
  const [ModalPrev, setModalPrev] = useState(false)
  // ABRIR MODAL
  const handleOpenModal = (e) => {
    e.preventDefault();
    setModalPrev(true)
  }

  const handleRenderChangeLocal = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      imgInput: true,
    });
  };
  const LocalRender = () => {
    return (
      <div>
        <button className={style.btnImg} onClick={(e) => handleRenderChangeURL(e)}>Subir con URL</button>

        {EditSesionUrl()}
      </div>
    );
  };

  const handleRenderChangeURL = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      imgInput: false,
    });
  };

  const URLRender = () => {
    return (
      <div>
        <button className={style.btnImgLocal} onClick={(e) => handleRenderChangeLocal(e)}>
          Subir img local
        </button>

        <input
          type="text"
          value={input.thumbnail}
          className={style.field}
          title="thumbnail"
          onChange={(e) => handleChange(e)}
        />
      </div>
    );
  };

  const RenderizadoBotones = () => {
    return (
      <div>
        <button className={style.btnImgLocal} onClick={(e) => handleRenderChangeLocal(e)}>
          Subir img local
        </button>

        <button className={style.btnImg} onClick={(e) => handleRenderChangeURL(e)}>Subir con URL</button>
      </div>
    );
  };

  const handleChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.title]: e.target.value,
    });
    // Validacion:
    //     setError(
    //         validate({
    //             ...input,
    //             [e.target.name]: e.target.value,
    //         })
    //     );
    // }
  };
  // Funcion para Convertir numero en String y agregar "AR"
  const handleChangesizes = (e) => {
    e.preventDefault();
    let numerosizes = e.target.value;
    let numeroString = numerosizes.toString() + " AR";

    setInput({
      ...input,
      sizes: numeroString,
    });
  };

  // BRAND
  const handleSelectBrand = (e) => {
    setInput({
      ...input,
      brand: e.target.value,
    });
  };

  // AGE_GROUP
  const handleSelect = (e) => {
    setInput({
      ...input,
      age_group: e.target.value,
    });
  };
  const handleSelectCondition = (e) => {
    setInput({
      ...input,
      condition: e.target.value,
    });
  };

  const handleSelectCategory = (e) => {
    setInput({
      ...input,
      category: e.target.value,
    });
  };


  const handleSelectGenero = (e) => {
    setInput({
      ...input,
      genero: e.target.value,
    });
  };

  // ELIMINAR URL Picture
  const handleDelete = (el) => {
    setInput({
      ...input,
      pictures: input.pictures.filter((name) => name !== el),
    });
  };

  //ELIMAR ARRAY COLOR
  const handleDeleteColor = (el) => {
    setInput({
      ...input,
      colors: input.colors.filter((name) => name !== el),
    });
  };

  //ELIMAR SIZES
  const handleDeleteSizes = (el) => {
    setInput({
      ...input,
      sizes: input.sizes.filter((name) => name !== el),
    });
  };

  // AÑADIR URL Pictures
  const hundlePictureAdd = (e) => {
    e.preventDefault();

    input.pictures.push(input.picture);
    setInput({
      ...input,
      picture: "",
    });
  };

  // AÑADIR URL colors
  const hundleColorsAdd = (e) => {
    e.preventDefault();
    input.colors.push(input.color);
    setInput({
      ...input,
      color: "",
    });
  };
  // AÑADIR URL colors
  const hundleSizesAdd = (e) => {
    e.preventDefault();
    input.sizes.push(input.size);
    setInput({
      ...input,
      size: "",
    });
  };

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
      input.sizes &&
      input.genero &&
      input.category 
    ) {
      dispatch(
        CreateNewProduct({
          thumbnail: input.thumbnail,
          title: input.title,
          price: input.price,
          condition: input.condition,
          pictures: [input.thumbnail, ...input.pictures],
          age_group: input.age_group,
          brand: input.brand,
          colors: input.colors,
          externalMaterial: input.externalMaterial,
          shoeStyle: input.shoeStyle,
          sizes: input.sizes,
          category: input.category,
          gender: input.genero,
          available_quantity: input.available_quantity
        })
      );
      swal({
        title: "Product created successfully!",
        icon: "success",
        button: "Ok",
      });
      setInput(initialState);
      history.push("/");
    } else alert(" missing data for the creation of a new product");
  };

  const [images, setimages] = useState("");

  useEffect(() => {
    setInput({
      ...input,
      thumbnail: images
    })

  }, [images]);

  const EditSesionUrl = () => {
    const changeInput = async (e) => {

      let newImgsToState = readmultifiles(e);
      console.log(newImgsToState)
      let thumbnail = await uploadImgLocal(newImgsToState)
      console.log(thumbnail)
      setimages(thumbnail[0]);
    };

    function readmultifiles(e, indexInicial) {
      const files = e.currentTarget.files;

      const arrayImages = [];

      Object.keys(files).forEach((i) => {
        const file = files[i];

        let url = URL.createObjectURL(file);

        //console.log(file);
        arrayImages.push({
          index: indexInicial,
          name: file.name,
          url,
          file,
        });

        indexInicial++;
      });

      return arrayImages;
    }

    function deleteImg(e) {
      //console.log("borrar img " + indice);
      e.preventDefault();
      setimages("");
    }

    return (
      <div className="container-fluid">
        <br></br>
        {/* INPUT IMAGES */}
        <label className={style.imgSelect}>
          <span>Seleccionar archivos </span>
          <input hidden type="file" multiple onChange={changeInput}></input>
        </label>

        {/* VIEW IMAGES */}
        {images ? (
          <div className="row">
            <div className="col-6 col-sm-4 col-lg-3 square">
              <div className="content_img">
                <button
                  className="position-absolute btn btn-danger"
                  onClick={(e) => deleteImg(e)}
                >
                  x
                </button>
                {console.log(images)}
                <img
                  alt="algo"
                  src={images}

                  data-toggle="modal"
                  data-target="#ModalPreViewImg"
                  className="img-responsive"
                ></img>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  };
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    setInput({
      ...input,
      pictures: pictures
    })
  }, [pictures]);
  const EditSesionLocal = () => {
    const changeInput = async (e) => {
      //esto es el indice que se le dará a cada imagen, a partir del indice de la ultima foto
      let indexImg;

      if (pictures.length > 0) {
        indexImg = pictures[pictures.length - 1].index + 1;
      } else {
        indexImg = 0;
      }

      let newImgsToState = readmultifiles(e, indexImg);
      let pictures2 = await uploadImgLocal(newImgsToState)
      console.log(pictures2[0])

      if (input.thumbnail && pictures2[0]) {
        if (pictures[0] !== input.thumbnail) {
          pictures2.unshift(input.thumbnail);
        }
      }
      let newImgsState2 = pictures.concat(pictures2)

      setPictures(newImgsState2);

      console.log(newImgsState2);
    };

    function readmultifiles(e, indexInicial) {
      const files = e.currentTarget.files;

      const arrayImages = [];

      Object.keys(files).forEach((i) => {
        const file = files[i];

        let url = URL.createObjectURL(file);

        arrayImages.push({
          index: indexInicial,
          name: file.name,
          url,
          file,
        });

        indexInicial++;
      });

      return arrayImages;
    }

    function deleteImg(indice) {
      const newImgs = pictures.filter(function (element) {
        return element.index !== indice;
      });
      setPictures(newImgs);
    }

    return (
      <div className="container-fluid">
        <br></br>
        {/* INPUT IMAGES */}
        <label className={style.imgSelect}>
          <span>Seleccionar archivos </span>
          <input hidden type="file" multiple onChange={changeInput}></input>
        </label>

        {/* VIEW IMAGES */}
        <div className="row">
          {pictures.map((pictures) => (
            <div
              className="col-6 col-sm-4 col-lg-3 square"
              key={pictures.index}
            >
              <div className="content_img">
                <button
                  className="position-absolute btn btn-danger"
                  onClick={deleteImg.bind(this, pictures.index)}
                >
                  x
                </button>
                {console.log(pictures)}
                <img
                  alt={pictures}
                  src={pictures}
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
  };
  const RenderizadoBotonesPictures = () => {
    return (
      <div>
        <button className={style.btnImgLocal} onClick={(e) => handleRenderChangeLocalPictures(e)}>
          Subir img local
        </button>

        <button className={style.btnImg} onClick={(e) => handleRenderChangeURLPictures(e)}>
          Subir con URL
        </button>
      </div>
    );
  };

  const handleRenderChangeLocalPictures = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      laImg: true,
    });
  };

  const handleRenderChangeURLPictures = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      laImg: false,
    });
  };

  const LocalRenderPictures = () => {
    return (
      <div>
        <button className={style.btnImg} onClick={(e) => handleRenderChangeURLPictures(e)}>
          Subir con URL
        </button>
        {EditSesionLocal()}
      </div>
    );
  };

  const URLRenderPictures = () => {
    return (
      <div>
        <button className={style.btnImgLocal} onClick={(e) => handleRenderChangeLocalPictures(e)}>
          {" "}
          Subir img local{" "}
        </button>
        <input
          type="text"
          value={input.picture.url}
          className={style.field}
          title="picture"
          onChange={(e) => handleChange(e)}
        />
        <button className={style.btnImg} onClick={(e) => hundlePictureAdd(e)}> Añadir imagen</button>
      </div>
    );
  };

  const [thumbnail2, setThumbnail2] = useState("");
  useEffect(() => {

  }, [thumbnail2]);


  const [localPictures, setLocalPictures] = useState([]);

  useEffect(() => {
    setInput({
      ...input,
      iLocalPictures: localPictures,
    });
  }, [localPictures]);

  const uploadImgLocal = async (files) => {
    let archivos = files.length - 1;
    let urls = [];
    while (archivos > -1) {
      const data = new FormData();
      data.append("file", files[archivos]?.file);
      data.append("upload_preset", "images");

      const upload = await fetch(
        "https://api.cloudinary.com/v1_1/dvh8g0fcw/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      const file = await upload.json();
      console.log(upload);
      console.log(file.secure_url);
      urls.push(file.secure_url);
      archivos = archivos - 1;
    }
    return urls;
  };

  const VariacionesSi = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      variacionesRender: 1,
    });
  };

  const VariacionesNo = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      variacionesRender: 2,
    });
  };
  
  const RenderizadoBotonesVariaciones= ()=>{
    return(
      <div>
    <p>¿Su producto tendrá variaciones?</p>
    <button onClick={(e) => VariacionesSi(e)}>Si</button>
    <button onClick={(e) => VariacionesNo(e)}>No</button>
    </div>
    )
  }
  

  const VariacionesRenderNo = ()=>{
return(
    <div>
    <p className="text-red-400">Su producto No tendrá variaciones</p>
    <button className = {style.variationsAdd} onClick={(e) => VariacionesSi(e)}>Añadir variaciones</button>

<div>
  <p>sizes: </p>
  <input
    type="text"
    value={input.size}
    className={style.field}
    title="size"
    onChange={(e) => handleChange(e)}
  />

</div>

<div>
<p>Stock: </p>
<input
type="number"
min="0"
step="25"
className={style.field}
value={input.stock}
title="stock"
onChange={handleChange}
/>
</div>


{/* colors */}
<div>
<p>colors:</p>
<input
type="text"
value={input.color}
className={style.field}
title="color"
onChange={(e) => handleChange(e)}
/>
</div>
</div>
)
  }

  const Variations= ()=>{
    const variationsObj = {
      size:"",
      color:"",
      stock:0,
      img:"",
    }
    const [inputVariations, setInputvariations] = useState(variationsObj);
const handleChangeVariaciones = (e)=>{
    e.preventDefault();
    setInputvariations({
      ...inputVariations,
      [e.target.title]: e.target.value,
    });

  }
  const addVariations = (e)=>{
    e.preventDefault();
let arr=[];
arr.push(inputVariations)
    const subirVariations = input.variations.concat(arr)
    setInputvariations({
      ...inputVariations,
     img :images
    })

    setInput({
      ...input,
      variations: subirVariations
      
    })
    console.log(inputVariations)
    console.log(input.variations)
  }
  
return(
<div>
<div>

  <button className = {style.variationsCancel} onClick={(e) => VariacionesNo(e)} >Cancelar variaciones</button>
    <p>sizes: </p>
    <input
      type="text"
      value={inputVariations.size}
      className={style.field}
      title="size"
      onChange={ handleChangeVariaciones}
    />

  </div>

<div>
<p>Stock: </p>
<input
  type="number"
  min="0"
  step="25"
  className={style.field}
  value={inputVariations.stock}
  title="stock"
  onChange={(e) => handleChangeVariaciones(e)}
/>
</div>


{/* colors */}
<div>
<p>colors:</p>
<input
  type="text"
  value={inputVariations.color}
  className={style.field}
  title="color"
  onChange={(e) => handleChangeVariaciones(e)}
/>
</div>

{input.imgInput === 0 && <RenderizadoBotones />}
{input.imgInput === true && <LocalRender />}
{input.imgInput === false && <URLRender />}


<button className={style.btnImg} onClick={(e) => addVariations(e)} >Añadir variación</button>
</div>



)
  }


  const ShowVariations = (variation)=>{

    return (
      <div>
        <p>color: {variation.color}</p>
        <p>size: {variation.size}</p>
        <p>stock: {variation.stock}</p>
      </div>
    )

  }


  // --------------------------------------------------------------------------------------------
  // COMPONENTE RENDER
  return (
    <div className={style.containerMain}>
      {console.log("Errores", error)}
      <form className={style.form}>
        <h2 className={style.titulo}>Product Creation</h2>
        {/* Previsualizar */}
        <button className={style.btnPrev} onClick={(e) => handleOpenModal(e)}>Previsualizar</button>
        {
          ModalPrev &&
          <ModalPrevisualizar
            title={input.title}
            picture={input.thumbnail}
            price={input.price}
            setModalPrev={setModalPrev}
            brand={input.brand}
            gender={input.genero}
            condition={input.condition}
            externalMaterial={input.externalMaterial}
            age_group={input.age_group}
            // Carrousel
            pictures={input.pictures}
            colors={input.colors}
            sizes={input.sizes}

          />
        }

        {/* TITLE */}
        <div>
          <p>Title:</p>

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

          {/* BRAND */}
      <div>
          <div className={style.select}>
            {input.brand.length === 0 && ( // si hay un error hara un <p> nuevo con el error
              <p className={style.error}>{"choose a brand"}</p>
            )}
            <p>Select brand:</p>
            <select className={style.select} onChange={(e) => handleSelectBrand(e)}>
              <option selected disabled>
                Select brand
              </option>
              {
                brand.map((e) => (
                  <option value={e}>{e}</option>
                ))
              }
            </select>
          </div>
      </div>

        {/* EXTERNALMATERIAAL */}
        <div>
          <p>Material Del Exterior: </p>

          <input
            type="text"
            value={input.externalMaterial}
            className={style.field}
            title="externalMaterial"
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* CATEGORIA */}
        <div className={style.select}>
          {input.category.length === 0 && ( // si hay un error hara un <p> nuevo con el error
            <p className={style.error}>{"choose a Category"}</p>
          )}
          <p>Select Category:</p>
          <select className={style.select} onChange={(e) => handleSelectCategory(e)}>
            <option selected disabled>
              Select Category
            </option> 
            {
              category.map((e) => (
                <option value={e}>{e}</option>
              ))
            }
          </select>
        </div>

        {/* GENERO */}
        <div className={style.select}>
            {input.genero.length === 0 && ( // si hay un error hara un <p> nuevo con el error
              <p className={style.error}>{"choose a genero"}</p>
            )}
            <p>Select genero:</p>
            <select className={style.select} onChange={(e) => handleSelectGenero(e)}>
              <option selected disabled>
                Select genero
              </option>
              {
                gender.map((e) => (
                  <option value={e}>{e}</option>
                ))
              }
            </select>
        </div>

        {/* AGE_GROUP */}
        <div className={style.select}>
          {/* {input.age_group && ( // si hay un error hara un <p> nuevo con el error
            <p className={style.error}>{"choose a age_group"}</p>
          )} */}
          <p>Select Age Group:</p>
          <select className={style.select} onChange={(e) => handleSelect(e)}>
            <option selected disabled>
              Select Age Group
            </option>
            <option value="Adultos">Adultos</option>
            <option value="Niños">Niños</option>
          </select>
        </div>

        {/* PICTURES */}
        <div>
          <p>Imagenes :</p>
          {/* {error.title && ( // si hay un error hara un <p> nuevo con el error
                        <p className={style.error}>{error.title}</p>
                    )} */}

          {input.laImg === 0 && <RenderizadoBotonesPictures />}
          {input.laImg === true && <LocalRenderPictures />}
          {input.laImg === false && <URLRenderPictures />}
          {/* ARRAY PICTURES  */}
          <div className={style.pictures}>
            {input.pictures?.map(
              (
                el //cada vez que coloquemos una opcion se creara una pequeña lista
              ) => (
                <div key={el} className={style.divName}>
                  <p>{el}</p>
                  <button
                    className={style.btnX}
                    onClick={() => handleDelete(el)}
                  >
                    X
                  </button>
                </div>
              )
            )}
          </div>
        </div>
        {/* VARIATIONS*/}

      
        <div>
          {input.variacionesRender === 0 && <RenderizadoBotonesVariaciones/>}
          {input.variacionesRender === 1 && <Variations/>} 
          {input.variacionesRender === 2 && <VariacionesRenderNo/>}
          {input.variations && input.variations.map(v => ShowVariations(v))}


        </div>
        
        {/* BUTTON */}
        {
          <button
            className={style.submit}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            Create New Product
          </button>
        }
      </form>
    </div>
  );
};

export default CreateProduct;
