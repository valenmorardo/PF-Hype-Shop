 export default function orden(orden, products) {
  
          if(orden.orderPrice === 'Menor a mayor') {
            products.sort((a, b) =>{
              if (b.price < a.price) return 1
              if (b.price > a.price) return -1
              return 0
            })
          } 

          if(orden.orderPrice === 'Mayor a menor') {
            products.sort((a, b) =>{
              if (b.price > a.price) return 1
              if (b.price < a.price) return -1
              return 0
            })
          } 
          




      return products;

}
