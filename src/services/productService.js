import { products } from "../data/products";

export const getProducts = () => Promise.resolve(products);

export const getProductById = (id) =>
  Promise.resolve(
    products.find((product) => product.id === Number(id))
  );

export const createProduct = (product) => {
  products.push(product);
  return Promise.resolve(product);
};

export const updateProduct = (id, updatedProduct) => {
  const index = products.findIndex(
    (product) => product.id === Number(id)
  );

  if (index !== -1) {
    products[index] = updatedProduct;
  }

  return Promise.resolve(updatedProduct);
};

export const deleteProduct = (id) => {
  const index = products.findIndex(
    (product) => product.id === Number(id)
  );

  if (index !== -1) {
    products.splice(index, 1);
  }

  return Promise.resolve();
};