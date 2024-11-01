import "./App.css";

import Navbar from "./component/Navigation/Navbar";
import Home from "./component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProductsList from "./Feature/AllProducts/AllProductsList";
import About from "./Feature/About/About";
import Contact from "./Feature/Contact/Contact";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}>
            <Route path="/admin" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="all-products-list" element={<AllProductsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
