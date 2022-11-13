import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, pictures, price , id}) => 
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
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={pictures}
                  alt={pictures}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900"> ${price}</p>
            </a>
        
  )
}
// 

export default Card;
