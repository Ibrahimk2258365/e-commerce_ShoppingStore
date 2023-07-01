import React, { useState } from 'react';
import './style.css';

import { deleteProductApi } from '../../Service/api';
import { updateProductApi } from '../../Service/api';

const ProductDetails = ({ product, addToCart }) => {
  const [editMode, setEditMode] = useState(false);
  const [updatedProduct, setUpdatedProduct] = useState({ ...product });

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    updateProductApi(updatedProduct.id, updatedProduct);
    setEditMode(false);
  };

  const handleDelete = () => {
    deleteProductApi(product.id);
  };

  const handleChange = (e) => {
    setUpdatedProduct({ ...updatedProduct, [e.target.name]: e.target.value });
  };

  return (
    <>
      <br /> <br /> <br />
      <div className="product-details-container">
        <div className="product-details">
          <div className="product-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="product-info">
            <div className="product-description">
              <br /> <br />
              <h1 className="breadcrumb">
                <span style={{ color: 'Black' }}>Product Details</span> / {product.name}
              </h1>
              <h5 className="price">Regular price: Rs. {product.price}</h5>
              <p className="tax-shipping">Tax included. Shipping calculated at checkout.</p>
            </div>
            <div className="product-options">
              <div className="size-options">
                <h4>SIZE</h4>
                <p>S</p>
                <p>M</p>
                <p>L</p>
                <p>XL</p>
              </div>
            </div>
            <div className="product-options">
              <div className="fabric">
                <h4>FABRIC</h4>
                <p>Chiffon</p>
              </div>
            </div>
            <div className="product-actions">
              {editMode ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={updatedProduct.name}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    name="price"
                    value={updatedProduct.price}
                    onChange={handleChange}
                  />
                  <button onClick={handleSave}>Save</button>
                </>
              ) : (
                <>
                  <button className="add-to-cart-btn" onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                  <p>Local/International Shipping Available</p>
                  <button onClick={handleEdit}>Edit</button>
                  <button onClick={handleDelete}>Delete</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;