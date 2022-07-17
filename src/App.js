import "./App.scss"
import Categories from "./components/categories/Categories"

function App() {
  return (
    <div className="App">
      <Categories Categories={Categories} />
    </div>
  );
}

export default App;
