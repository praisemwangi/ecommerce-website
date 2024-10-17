import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart/Cart";
import About from "./components/About";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Register from "./components/Register";
import { CartProvider } from "./components/Cart/CartContext";


function App() {
  return (
    <div className="App">
      <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/ProductDetail" element={<ProductDetail/>}></Route>
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register/>}></Route>
        </Routes>
        <Footer />
      </Router>
      </CartProvider>
      
    </div>
  );
}

export default App;
