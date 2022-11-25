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
    "Marca",
    "Edad",
    "Materiales del exterior",
    "Género",
    "Estilo",
  ];
  const attributesFormatted = {};

  attributes.forEach((attr) => {
    for (const attribute of requiredAttributes) {
      if (attr.name === attribute) {
        attributesFormatted[attribute] = attr.value;
      }
    }
  });

  return {
    id,
    title,
    price: Number(price),
    condition,
    sold_quantity,
    available_quantity,
    variations,
    pictures,
    age_group: attributesFormatted.Edad,
    brand: attributesFormatted.Marca,
    gender: attributesFormatted["Género"],
    category: attributesFormatted["Estilo"],
  };
};

module.exports = { objectFormatter };
