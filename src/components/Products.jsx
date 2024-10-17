import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Products.css';
import { useCart } from './Cart/CartContext';

function Products() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('All');
  const [addedToCart, setAddedToCart] = useState({}); // Track added products

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterChange = (category) => {
    setFilter(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(item => item.category === category.toLowerCase());
      setFilteredProducts(filtered);
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
    setAddedToCart(prev => ({ ...prev, [item.id]: !prev[item.id] })); // Toggle added state
  };

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div>
      <div className="filter-buttons">
        <button onClick={() => handleFilterChange('All')}>All</button>
        <button onClick={() => handleFilterChange("Men's Clothing")}>Men's Clothing</button>
        <button onClick={() => handleFilterChange("Women's Clothing")}>Women's Clothing</button>
        <button onClick={() => handleFilterChange('Electronics')}>Electronics</button>
        <button onClick={() => handleFilterChange('jewelery')}>Jewelry</button> 
      </div>

      <div id="product-card">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(item => (
            <div className="card-container" key={item.id}>
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h1>{item.title}</h1>
                <h2>${item.price}</h2>
              </Link>
              <button 
                className="add-to-cart" 
                onClick={() => handleAddToCart(item)}>
                {addedToCart[item.id] ? 'Cancel' : 'Add to Cart'}
              </button>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
