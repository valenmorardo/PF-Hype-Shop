export default function filter(filtros, products) {
  

   
    let filteredProducts = products.filter((product) => {
      for (const key in filtros) {
        if (product[key] !== filtros[key] && filtros[key] !== 'Todos') {
          return false;
        }
      }
      return true;
    });


    return filteredProducts;

}
