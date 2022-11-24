const objectFormatter = (details) => {
  const {
    title,
    price,
    condition,
    pictures,
    attributes,
    variations,
    sold_quantity,
    available_quantity,
  } = details;

  const requiredAttributes = [
    "Marca",
    "Edad",
    "Materiales del exterior",
    "Género",
    "Estilo",
  ];
  const results = [];

  attributes.forEach((attr) => {
    for (const attribute of requiredAttributes) {
      if (attr.id === attribute) {
        results.push({
          name: attr.value_name,
          value_name: attr.name,
        });
      }
    }
  });

  const arrayOfVariations = [];
  if (variations.length) {
    variations.forEach((variation) => {
      arrayOfVariations.push({
        price: variation.price,
        sold_quantity: variation.sold_quantity,
        available_quantity: variation.available_quantity,
        picture_ids: variation.picture_ids,
        attribute_combinations: variation.attribute_combinations,
      });
    });
  }

  return {
    id,
    title,
    price: Number(price),
    condition,
    thumbnail,
    pictures: pictures.map((picture) => picture.url),
    age_group: attributesObject.AGE_GROUP || "No especificado",
    brand: attributesObject.BRAND || "No especificado",
    colors: color,
    externalMaterial: attributesObject.EXTERIOR_MATERIALS || "No especificado",
    shoeStyle: attributesObject.FOOTWEAR_TYPE || "No especificado",
    sizes: size,
    last_updated,
    gender: attributesObject.GENDER,
    category: attributesObject.STYLE,
  };
};

module.exports = { objectFormatter };
