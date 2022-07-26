import "./Category.scss"
import { useParams } from "react-router-dom"
import { useContext, useState, useEffect} from "react"
import { CategoriesContext } from "../../../contexts/categories"
import ProductCard from "../../product-card/ProductCard"
import { Fragment } from "react"
import { motion } from "framer-motion"
import {pageAnimation} from "../../../animation";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
  
    useEffect(() => {
      setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
  
    return (
      <Fragment>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show" className='category-container'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </motion.div>
      </Fragment>
    );
  };
  
  export default Category;