const objectFormatter = (details) => {
  const { id, title, price, thumbnail, pictures, attributes } =
    details;
  let objFormatted = {
    id,
    title,
    price,
    thumbnail,
    pictures: pictures.map((picture) => picture.url),
    attributes: attributes.map((attribute) => ({
      name: attribute.name,
      value: attribute.value_name,
    })),
  };
  let obj2 = {};
  // const convertirACamelCase = (texto) =>{
  //   return texto.replace(/\W+(.)/g, function(coincidencia, c){
  //    return c.UpperCase();

  //   })
  // }
  function convertirACamelCase(texto) {
    return texto.replace(/\W+(.)/g, function(coincidencia, c) {
       return  c.toUpperCase();
       
    });
}
  const arr = ['Edad' , 'Marca' , "Color" , "Materiales del exterior" , "Género" , "Materiales del interior" , "Condición del ítem" ]
  const attri = objFormatted.attributes

  attri.forEach(v =>{
    arr.forEach(a =>{
      if(v.name === a){
        obj2 [convertirACamelCase(a)] = v.value

      }
    })
  })

delete objFormatted.attributes

Object.assign(objFormatted, obj2);

  return objFormatted;
};

module.exports = { objectFormatter };
