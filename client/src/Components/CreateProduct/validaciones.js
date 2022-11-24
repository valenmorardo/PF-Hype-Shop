const validate = (input) => {
  let errores = {};
  console.log(errores)
  let priceValidate;
  function isNumeric(value) {
      return /^-?\d+$/.test(value);
  }
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

  /*      SOTCK           */
  // else if (input.stock === 0) {
  //     errores.stock = "Stock is not 0";
  // }
  // else if (input.stock < 0) {
  //     errores.stock = "Stock is not less than 0";
  // }
}