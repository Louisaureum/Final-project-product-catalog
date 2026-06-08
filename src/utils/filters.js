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

export const filterBySearch = (products, search) => {
  if (!search || search.trim() === '') return products;

  const normalized = search.toLowerCase().trim();

  return products.filter((product) => {
    if (!product) return false;

    const name = String(product.name || '').toLowerCase();
    const category = String(product.category || '').toLowerCase();
    const description = String(product.description || '').toLowerCase();

    return (
      name.includes(normalized) ||
      category.includes(normalized) ||
      description.includes(normalized)
    );
  });
};