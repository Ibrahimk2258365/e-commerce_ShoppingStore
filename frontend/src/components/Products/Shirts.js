import React, { useState } from "react";
import ProductDetails from "./ProductDetails";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Cart from "./Cart";

const Shirt = () => {

  const [abayasdata, setAbayasdata] = useState([
    { id: 1, name: "Cotton Shirt - MW Amblish", price: 1050, image: "images/s1.jpeg" },
  { id: 2, name: "Cotton Shirt - MW Clestial", price: 1500, image: "images/s2.jpeg" },
  { id: 3, name: "Graceful Eleganc Shirt", price: 2000, image: "images/s3.jpeg" },
  {
    id: 4,
    name: "Floral Sundress Shirt - M Charming",
    price: 2050,
    image: "images/s4.jpeg",
  },
  { id: 5, name: "Dreamy Chiffon Shirt", price: 2330, image: "images/s5.jpg" },
  {
    id: 6,
    name: "Dreamy Chiffon Wrap Dress Shirt",
    price: 2535,
    image: "images/s13.png",
  },
  {
    id: 7,
    name: "Sophisticated Satin Shirt",
    price: 4440,
    image: "images/s7.jpeg",
  },
  {
    id: 8,
    name: "Bohemian Ruffled Maxi Dress Shirt",
    price: 5645,
    image: "images/s8.jpeg",
  },
  { id: 9, name: "Clestial Shirt", price: 2350, image: "images/s9.jpeg" },
  { id: 10, name: "Amblish Shirt 10", price: 2455, image: "images/s10.jpeg" },
  {
    id: 11,
    name: "Dreamy Chiffon Wrap Dress Shirt",
    price: 6560,
    image: "images/s11.png",
  },
  { id: 12, name: "Graceful Eleganc Shirt", price: 2365, image: "images/s12.png" },
]);

  const [cartItems, setCartItems] = useState([]);
  //const navigate = useNavigate(); 

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  // const handleAddToCart = (product) => {
  //   setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //   navigate("/cart");
  // };

  //for detail page
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const increaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.quantity > 1) {
        return { ...cartItem, quantity: cartItem.quantity - 1 };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  };

  const removeItem = (item) => {
    const updateCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updateCart);
  };

  return (
    <div>
      <div className="women-shoes-section">
        <h2>SHIRTS</h2>
        <div className="shoes-container">
          {abayasdata.map((shoe) => (
            <div
              className="shoe-card"
              key={shoe.id}
              onClick={() => handleProductClick(shoe)}
            >
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p>Price: {shoe.price}</p>
              <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetails product={selectedProduct} addToCart={handleAddToCart} />
      )}

      <Cart
        cartItems={cartItems}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        removeItem={removeItem}
      />

    </div>
  );
};

export default Shirt;
