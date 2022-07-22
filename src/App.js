import "./App.scss"
import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import Shop from "./components/routes/shop/Shop";
import About from "./components/routes/about/About"
import {Routes, Route} from "react-router-dom";
import Authentication from "./components/routes/authentication/Authentication";
import Contact from "./components/routes/contact/contact"
import Checkout from "./components/routes/checkout/Checkout";



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path="/Shop" element={<Shop />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Authentication" element={<Authentication />}/>
          <Route path="/Contact" element={<Contact />}/>
          <Route path="/Checkout" element={<Checkout />}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
