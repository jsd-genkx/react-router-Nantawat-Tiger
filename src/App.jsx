import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import ProductList from "./pages/ProductList";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import ProfileInfo from "./pages/ProfileInfo";



function App() {
  return (
    
      <div className="p-6">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element={<Home />}/>
            <Route path = "/about" element={<About />}/>
            <Route path = "/contact" element={<Contact />}/>
            <Route path = "/products"  element={<ProductList />}/>
            <Route path = "/products/:id" element={<ProductDetail />}/>
            <Route path = "/profile" element= {<Profile />}>
              <Route path= "info" element= {<ProfileInfo />}/>
              <Route path= "orders" element= {<Orders />}/>
              <Route path= "setting" element= {<Settings />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App
