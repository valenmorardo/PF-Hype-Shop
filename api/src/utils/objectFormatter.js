const objectFormatter = (details) => {
  const { id, title, price, condition, thumbnail, pictures, attributes } =
    details;
  const objFormatted = {
    id,
    title,
    price,
    condition,
    thumbnail,
    pictures: pictures.map((picture) => picture.url),
    attributes: attributes.map((attribute) => ({
      name: attribute.name,
      value: attribute.value_name,
    })),
  };

  return objFormatted;
};

module.exports = { objectFormatter };
