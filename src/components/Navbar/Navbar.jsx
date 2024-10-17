import { Link } from 'react-router-dom';
import { ShoppingCart } from "phosphor-react";
import './Navbar.css';

function Navbar() {
  return (
    <div className="Navbar">
      <div className='Links'>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/ContactUs'>Contact Us</Link>
        <Link to='/Products'>Products</Link>
        <Link to='/Cart'><ShoppingCart size={32} /></Link>
        <Link to='/Login'>Login</Link>
        <Link to='/Register'>Register</Link>
      </div>
    </div>
  );
};

export default Navbar;
