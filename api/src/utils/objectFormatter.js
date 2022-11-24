const objectFormatter = (details) => {
  const {
    id,
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
    "BRAND",
    "AGE_GROUP",
    "COLOR",
    "SIZE",
    "EXTERIOR_MATERIALS",
    "GENDER",
    "STYLE",
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
    attributes: results,
    variations: arrayOfVariations,
    pictures: pictures.map((picture) => picture.url),
    sold_quantity,
    available_quantity,
  };
};

module.exports = { objectFormatter };
