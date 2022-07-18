import "./Categories.scss"
import Cards from "../cards/Cards"



const categories = ({Categories}) => {
    
    const categories = [
        {
            "id": 1,
            "title": "Sunday Morning",
            "imageUrl": "https://images.unsplash.com/photo-1561181286-d3fee7d55364?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        },
        {
            "id": 2,
            "title": "Date Night",
            "imageUrl": "https://images.unsplash.com/photo-1583228858294-6745cb25969e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZsb3dlciUyMGJvdXF1ZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
        },
        {
            "id": 3,
            "title": "You deserve Everything ",
            "imageUrl": "https://images.unsplash.com/photo-1585538021714-6e27e9fa1165?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80"
        },
        {
            "id": 4,
            "title": "House Love",
            "imageUrl": "https://images.unsplash.com/photo-1533616688419-b7a585564566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80"
        },
        {
            "id": 5,
            "title": "Shop All",
            "imageUrl": "https://images.unsplash.com/photo-1565695951564-007d8f297e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
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

