import React from 'react';
import { useCart } from './CartContext';
import './Cart.css'; // Import the CSS file

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul>
                    {cart.map(item => (
                        <li className="cart-item" key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h1>{item.title}</h1>
                            <span>${item.price}</span>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
