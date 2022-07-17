import "./App.scss"
import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import Shop from "./components/routes/shop/Shop";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path="/Shop" element={<Shop />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
