import axios from 'axios';

const url = 'https://malbus-ecom-server.onrender.com';



export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${url}/products`);
    return response.data;
  } catch (error) {
    throw new Error('Error retrieving products');
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.post(`${url}/products`, product);
    return response.data;
  } catch (error) {
    throw new Error('Error adding product');
  }
};

export const updateProductApi = async (productId, updatedProduct) => {
  try {
    const response = await axios.put(`${url}/products/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    throw new Error('Error updating product');
  }
};

export const deleteProductApi = async (productId) => {
  try {
    const response = await axios.delete(`${url}/products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting product');
  }
};
export const addUser = async (user) => {
  console.log('API CALLED');
  await axios.post(`${url}/signup`, user);
};

export const getUser = async () => {
  return await axios.get(`${url}/user`);
};
export const checkout = async (checkoutData) => {
  try {
    return await axios.post(`${url}/checkout`, checkoutData);
  } catch (error) {
    throw new Error('Error during checkout');
  }
};
export const loginUser = async (username, password) => {
  try {
    const loginData = {
      username,
      password,
    };
    return await axios.post(`${url}/login`, loginData);
  } catch (error) {
    throw new Error('Error during login');
  }
};