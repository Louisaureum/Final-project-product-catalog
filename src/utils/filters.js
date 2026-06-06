export const filterByCategory = (
  products,
  category
) => {
  if (!category) return products;

  return products.filter(
    (product) => product.category === category
  );
};

export const filterByStatus = (
  products,
  status
) => {
  if (!status) return products;

  return products.filter(
    (product) => product.status === status
  );
};