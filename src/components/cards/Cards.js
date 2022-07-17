import "./Cards.scss"



const Cards = ({category}) => {
  const {imageUrl, title} = category;
return (

  <div className="category-container">
  <div className="background-image"
  style={{ 
    backgroundImage: `url(${imageUrl})`
  }}
  />
  <div className="category-body-container">
     <h2>{title}</h2>
  </div>
  </div>


)
}

export default Cards