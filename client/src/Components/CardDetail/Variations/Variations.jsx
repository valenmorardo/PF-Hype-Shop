import { colorChannel } from "@mui/system";
import { useEffect, useState } from "react";


const Variations = ({
  variations,
  handleVariationChange,
  variationChoosen,
}) => {
  const [sizes, setSizes] = useState([])
  
  // const [stock, setStock] = useState([])
  useEffect(() => {
    handleVariationChange(variations[0]);
  }, [variations]);
// console.log('v', variations)
// console.log('hv', handleVariationChange)
// console.log('vc', variationChoosen)

const colorsUnique = []

const nameColors = []

variations.forEach((el)=>{
  if(!nameColors.includes(el.color.name)){
    nameColors.push(el.color.name)
    colorsUnique.push({
      color: el.color.name,
      picture: el.picture_ids[0]
    })
}

})





const handleVariation = (e) =>{
  const colorElegido= e.target.value
const filterSizes = variations.map((el)=>el.color.name === colorElegido && el)
const sizesFinal = filterSizes.filter((el)=>el !== false)

const sort = sizesFinal.sort((a,b)=>{
  if(a.size.value > b.size.value)return 1;
  if(a.size.value < b.size.value)return -1;
  return 0;
})

setSizes(sort)
 
}


  return (
    <>
    {colorsUnique.map(el=>(
      <button value={el.color}
            className={`w-20 h-20 m-2 `}
            style={{
              backgroundImage: `url(${el.picture})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={(e) => handleVariation(e)}
          />
    ))}
    <div className="flex justify-center ">

    <select className="bg-gray-50 mt-2 mx-2 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
      <option disabled selected>Talles</option>
{sizes.map((talle)=>(
  <option value={talle.size.value}>{talle.size.value}</option>
  
  ))}

    </select>
  </div>
      {/* <p>Talle {variationChoosen?.size?.value}</p>
      <p>Color {variationChoosen?.color?.name}</p>
      <p>Cantidad disponible : {variationChoosen?.available_quantity}</p>
      <div className="flex flex-row flex-wrap">
        {colorsUnique.map((variation) => (
          <button
            className={`w-20 h-20 m-2 ${
              variation.id === variationChoosen.id
                ? "border-4 rounded-md  border-blue-600"
                : ""
            }`}
            style={{
              backgroundImage: `url(${variation.picture_ids[0]})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={() => handleVariationChange(variation)}
          />
        ))}
      </div> */}
    </>
 );
};

export default Variations;
