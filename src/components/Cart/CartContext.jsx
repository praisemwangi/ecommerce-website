import React, { createContext, useContext, useState } from 'react';

// Create the Cart Context
const CartContext = createContext();

// Custom hook for using the Cart Context
export const useCart = () => {
    return useContext(CartContext);
};

// Create the Cart Provider component
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
