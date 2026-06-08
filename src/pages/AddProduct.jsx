import ProductForm from '../components/ProductForm';

function AddProduct({ onAddProduct }) {
  return (
    <ProductForm onAddProduct={onAddProduct} />
  )
}

export default AddProduct;
