import React from "react";


const CardAdmin = ({ title, pictures, price , id,visible }) => 
//   return (
//     <div>
//       <div className={styles.container}>
//         <h3>{title}</h3>
//         <img className={styles.image} src={pictures} alt="not image" width="40%" height="40%"></img>
//         <h3>$ {price}</h3>
//       </div>
//     </div>
//   );
{
  return (
    
            <a key={id} href={id} className="group">
              <div className="aspect-w-1 aspect-h-1  h-64 w-full overflow-hidden rounded-lg   xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={pictures[0]}
                  alt={pictures[0]}
                  className="max-h-200 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              {visible === 1 &&<h3 className="mt-4 text-sm text-red-900"> Este producto no puede ser visto por los clientes</h3> }
              
              <h3 className="mt-4 text-sm text-gray-900">{title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-800"> ${price}</p>
            </a>
        
  )
}
// 

export default CardAdmin;



// const updateProduct = async (req, res) => {
//   try{
//      let {
//         id,
//         title,
//         price,
//         condition,
//         thumbnail,
//         pictures,
//         age_group,
//         shoeStyle,
//         sizes,
//         brand,
//         colors,
//         externalMaterial,
//         category,
//         gender,
//         available_quantity,
//      } = req.body;
  
//      console.log(id)
  
//      let productUpdate = await Product.update({
  
//         title: title,
//         price: price,
//         condition: condition,
//         thumbnail:thumbnail,
//         pictures:pictures,
//         age_group:age_group,
//         shoeStyle:shoeStyle,
//         sizes:sizes,
//         brand:brand,
//         colors:colors,
//         externalMaterial:externalMaterial,
//         category:category,
//         gender:gender,
//         available_quantity:available_quantity,
//      },{
//         where : {id : req.body.id}
//      })
  
//      console.log(productUpdate);
  
//      res.send(productUpdate);
//   } catch (error) {
//      console.log(error);
//      res.status(400).send(error);
//   }
//   }
//   const deleteProduct = async (req, res) =>{
//   const {id} = req.body;
//   console.log(id)
//   try{
//   let productDelete = await Product.update({
//      visible:1
  
//   },{
//      where : {id : id}
  
//   })
  
//   res.send("producto no visible para clientes")
//   } catch (error) {
//      console.log(error);
//      res.status(400).send(error);
//   }
//   }