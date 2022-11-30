import { colorChannel } from "@mui/system";
import { useEffect, useState } from "react";


const Variations = ({
  variations,
  handleVariationChange,
  variationChoosen,
}) => {
  const [sizes, setSizes] = useState([])
  
  const [stock, setStock] = useState([])
  useEffect(() => {
    if(stock.length === 0){
      handleVariationChange(variationChoosen)
    }else{
      handleVariationChange({...stock[0], variations:[]} );
    }
  }, [stock]);
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



const handleFilterSizeStock = (e) =>{
  e.preventDefault()
  const talleElegido = e.target.value
 const filterStock = sizes.map((el)=>el.size.value === talleElegido && el)
 const stockFinal = filterStock.filter((el)=>el !== false)
 console.log(stockFinal)
 setStock(stockFinal)

}



  return (
    <>
    {colorsUnique.map(el=>(
      <button value={el.color}
            className={`w-20 h-20 m-2 focus:ring-4 focus:outline-none focus:ring-blue-600`}
            style={{
              backgroundImage: `url(${el.picture})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            onClick={(e) => handleVariation(e)}
          />
    ))}
    <div className="flex-wrap justify-center ">
{sizes.map((talle)=>(
  talle.available_quantity=== 0? <button disabled={true} className="line-through mt-3 text-gray-400  border border-gray-400  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >{talle.size.value}</button>
  :
  <button  className=" mt-3 text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "value={talle.size.value} onClick={e=> handleFilterSizeStock(e)} >{talle.size.value}</button>
))}
{stock.length !== 0 ? <div className="flex justify-between">
  <span className="mt-3 text-blue-700  border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Stock disponible: {stock[0].available_quantity}</span> 
  <span  className="mt-3 text-blue-700  border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Color: {stock[0].color.name}</span>
  <span  className="mt-3 text-blue-700  border border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Talle: {stock[0].size.value}</span>
  </div>
  : <></>}




   
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
