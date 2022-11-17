 export default function orden(orden, products) {
  
          if(orden.orderPrice === 'MENORPrecio') {
            products.sort((a, b) =>{
              if (b.price < a.price) return 1
              if (b.price > a.price) return -1
              return 0
            })
          } 

          if(orden.orderPrice === 'MAYORPrecio') {
            products.sort((a, b) =>{
              if (b.price > a.price) return 1
              if (b.price < a.price) return -1
              return 0
            })
          } 
          




      return products;

}
