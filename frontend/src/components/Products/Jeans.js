import React, { useState, useEffect } from 'react';
import './style.css';
import ProductDetails from './ProductDetails';
import Cart from './Cart';
import { addProduct, getAllProducts, updateProductApi, deleteProductApi } from '../../Service/api';

const Jeans = () => {
  const [hijabsdata, sethijabsdata] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const products = await getAllProducts();
      sethijabsdata(products);
    } catch (error) {
      console.log('Error while loading products:', error);
    }
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleSave = async (updatedProduct) => {
    try {
      await updateProductApi(updatedProduct.id, updatedProduct);
      loadProducts();
    } catch (error) {
      console.log('Error while updating product:', error);
    }
  };

  const handleDelete = async (productId) => {
    try {
      await deleteProductApi(productId);
      setSelectedProduct(null);
      loadProducts();
    } catch (error) {
      console.log('Error while deleting product:', error);
    }
  };

  const increaseQuantity = (item) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
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
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    setCartItems(updatedCart);
  };

  const handleAddProduct = async () => {
    try {
      const newProduct = {
        name: 'New Product',
        price: 1000,
        image: 'images/h13.png',
      };
      const addedProduct = await addProduct(newProduct);
      console.log('Added Product:', addedProduct);
      loadProducts();
    } catch (error) {
      console.log('Error while adding product:', error);
    }
  };

  const initialProducts = [
    { id: 1, name: "Cotton Shirt - Blue", price: 1200, image: "images/h1.png" },
    { id: 2, name: "Denim Shirt - Black", price: 1500, image: "images/h2.png" },
    { id: 3, name: "Floral Shirt - White", price: 900, image: "images/h3.png" },
    { id: 4, name: "Striped Shirt - Red", price: 1100, image: "images/h4.png" },
    { id: 5, name: "Printed Shirt - Green", price: 950, image: "images/h5.png" },
    { id: 10, name: "Skinny Jeans - Blue", price: 1600, image: "images/h10.png" },
    { id: 11, name: "Ripped Jeans - Black", price: 1800, image: "images/h11.png" },
    { id: 12, name: "Straight Fit Jeans - Grey", price: 1350, image: "images/h12.png" },
    { id: 6, name: "High Waisted Jeans - Blue", price: 1550, image: "images/h3.png" }
  ];

  useEffect(() => {
    sethijabsdata(initialProducts);
  }, []);
  

  return (
    <div>
      <div className="women-shoes-section">
        <h2>JEANS</h2>
        <button onClick={handleAddProduct}>Add New Product</button>
        <div className="shoes-container">
          {hijabsdata.map((shoe) => (
            <div className="shoe-card" key={shoe.id} onClick={() => handleProductClick(shoe)}>
              <img src={shoe.image} alt={shoe.name} />
              <h3>{shoe.name}</h3>
              <p>Price: {shoe.price}</p>
              <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          addToCart={handleAddToCart}
          onSave={handleSave}
          onDelete={handleDelete}
        />
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

export default Jeans;
