import "./App.scss"
import Categories from "./components/categories/Categories"
import ImageHeader from "./components/image-header/ImageHeader";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <ImageHeader />
      <Categories Categories={Categories} />
    </div>
  );
}

export default App;
