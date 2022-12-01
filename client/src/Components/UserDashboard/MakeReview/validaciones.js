const validacion = (review) => {
  let errores = {};

  if (review.title) {
    if (review.title.length < 4) {
      errores.title = "El minimo de caracteres para el titulo es 4!";
    } else if (review.title.length > 70) {
      errores.title = "El maximo de caracteres para el titulo es 70!";
    }
  }

  if (review.content) {
    if (review.content.length < 4) {
      errores.content = "El minimo de caracteres para el contenido es 4!";
    } else if (review.content.length > 250) {
      errores.content = "El maximo de caracteres para el titulo 250!";
    }
  }

  if (review.rate) {
    if (review.rate.length === 0) {
      errores.rate = "Debe asignar un puntaje!";
    }
  }

  return errores;
};
export default validacion;
