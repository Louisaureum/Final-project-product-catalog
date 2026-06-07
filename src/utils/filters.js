export const filterByCategory = (
  products,
  category
) => {
  if (!category || category.trim() === "") return products;

  return products.filter((product) => {
    if (!product || !product.category) return false;

    return product.category.toLowerCase().trim() === category.toLowerCase().trim();
  });
};

export const filterByStatus = (
  products,
  status
) => {
  if (!status || status.trim() === "") return products;

  return products.filter(
    (product) => {
      if (!product || !product.status) return false;
      return product.status.toLowerCase().trim() === status.toLowerCase().trim();
    }
  );
};