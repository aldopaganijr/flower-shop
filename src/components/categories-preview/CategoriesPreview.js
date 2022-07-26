import { useContext } from 'react';
import { motion } from "framer-motion"
import {pageAnimation} from "../../animation";
import { CategoriesContext } from '../../contexts/categories';
import CategoryPreview from '../../components/category-preview/CategoryPreview';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <motion.div exit="exit" variants={pageAnimation} initial="hidden" animate="show">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </motion.div>
  );
};

export default CategoriesPreview;