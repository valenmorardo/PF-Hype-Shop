const objectFormatter = (details) => {
  const { title, price, condition, thumbnail, pictures, attributes } = details;

  const requiredAttributes = [
    "BRAND",
    "AGE_GROUP",
    "COLOR",
    "SIZE",
    "FOOTWEAR_TYPE",
    "EXTERIOR_MATERIALS",
  ];
  const results = [];

  attributes.forEach((attr) => {
    const attributesArray = [attr.id, attr.value_name];
    for (const req of requiredAttributes) {
      if (attributesArray[0] === req) {
        return results.push([req, attributesArray[1]]);
      }
    }
  });
  const attributesObject = Object.fromEntries(results);

  const objFormatted = {
    title,
    price,
    condition,
    thumbnail,
    pictures: pictures.map((picture) => picture.url),
    age_group: attributesObject.AGE_GROUP || "",
    brand: attributesObject.BRAND || "",
    color: attributesObject.COLOR || "",
    externalMaterial: attributesObject.EXTERIOR_MATERIALS || "",
    shoeStyle: attributesObject.FOOTWEAR_TYPE || "",
    size: attributesObject.SIZE || "",
  };

  return objFormatted;
};

module.exports = { objectFormatter };
