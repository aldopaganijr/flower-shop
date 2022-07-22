import "./Shop.scss";
import { useContext } from "react";
import { CategoriesContext } from "../../../contexts/categories";
import ProductCard from "../../product-card/ProductCard";
import CategoryPreview from "../../category-preview/CategoryPreview"


const Shop = () => {
  const {categoriesMap} = useContext(CategoriesContext)

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return(
          <CategoryPreview key={title} title={title} products={products} />
        )
      })}
    </div>
  );
};

export default Shop