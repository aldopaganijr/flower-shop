import "./CategoryPreview.scss"
import ProductCard from "../product-card/ProductCard"
import React from 'react'

const CategoryPreview = ({title, products}) => {
  return (

    <div className="category-preview-container">
        <h2>
            <span className="title">{title.toUpperCase()}</span>
        </h2>
        <div className="preview">
            {
                products.filter((_, idx) => idx < 3)
                .map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    </div>
  )
}

export default CategoryPreview