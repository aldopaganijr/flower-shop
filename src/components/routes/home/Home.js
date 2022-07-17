import Categories from "../../categories/Categories"
import ImageHeader from "../../image-header/ImageHeader";
import "./Home.scss"

function Home() {
  return (
    <div className="Home">
      <ImageHeader />
      <Categories Categories={Categories} />
    </div>
  );
}

export default Home;