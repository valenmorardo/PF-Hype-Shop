import { useEffect } from "react";

const Variations = ({
  variations,
  handleVariationChange,
  variationChoosen,
  firstVariation,
}) => {
  useEffect(() => {
    handleVariationChange(variations[0]);
  }, [variations]);

  return (
    <>
      <p>Talle {variationChoosen?.size?.value}</p>
      <p>Color {variationChoosen?.color?.name}</p>
      <p>Cantidad disponible : {variationChoosen?.available_quantity}</p>
      <div className="flex flex-row flex-wrap">
        {variations.map((variation) => (
          <button
            className={`w-20 h-20 m-2 ${
              variation.id === variationChoosen.id
                ? "border-4 rounded-md  border-blue-600"
                : "border-l-pink-700"
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
      </div>
    </>
  );
};

export default Variations;
