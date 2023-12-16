import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/aboutus"
import Blog from "./component/blog"
import Business from "./component/business"
import Product from "./component/product"
import Health from "./component/healthtips"
import Home from "./component/home"
import Nav from './component/nav'
import Contact from './component/contact'
import header from "./component/header";

export default function App() {
  return (
    
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />} />
            <Route path="Blog" element={<Blog />} />
            <Route path="Business" element={<Business />} />
            <Route path="Product" element={<Product />} />
            <Route path="Health" element={<Health />} />
            <Route path="AboutUs" element={<About />} />
            <Route path="Contact" element={<Contact/>} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}



