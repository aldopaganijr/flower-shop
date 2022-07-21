import "./Shop.scss";
import { useContext } from "react";
import { ProductsContext } from "../../../contexts/products";
import ProductCard from "../../product-card/ProductCard"

const Shop = () => {
  const {products} = useContext(ProductsContext)

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard  key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Shop