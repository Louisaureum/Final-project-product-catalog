import ProductCard from "./ProductCard";

function ProductList ({products = []}){
    return(
        <div>
            <ProductCard/>
        </div>
    )
}

export default ProductList;