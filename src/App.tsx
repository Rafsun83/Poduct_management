import "./App.css";

import Navbar from "./component/Navigation/Navbar";
import Home from "./component/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProductsList from "./Feature/AllProducts/AllProductsList";
import About from "./Feature/About/About";
import Contact from "./Feature/Contact/Contact";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store/store";

function App() {
  
  return (
    <div className="App">
       <ReduxProvider store={store} >
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
       </ReduxProvider>
   
    </div>
  );
}

export default App;
