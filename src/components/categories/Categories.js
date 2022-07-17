import "./Categories.scss"
import Cards from "../cards/Cards"



const categories = ({Categories}) => {
    
    const categories = [
        {
            "id": 1,
            "title": "Rolex",
            "imageUrl": "https://i.ibb.co/Svz6f8k/rolex.webp"
        },
        {
            "id": 2,
            "title": "Cartier",
            "imageUrl": "https://i.ibb.co/qyRbcm2/cartier.jpg"
        },
        {
            "id": 3,
            "title": "Patek Philippe ",
            "imageUrl": "https://i.ibb.co/BCb5GVf/patek.jpg"
        },
        {
            "id": 4,
            "title": "Richard Mille",
            "imageUrl": "https://i.ibb.co/RBsS9Lb/richard.jpg"
        },
        {
            "id": 5,
            "title": "Omega",
            "imageUrl": "https://i.ibb.co/7GMM7bq/omega.jpg"
        }
        
    ]

  return (
    <div className="categories-container">
    {categories.map((category) => (
        <Cards key={category.id} category={category} />
    ))}
    </div>
  )
}

export default categories

