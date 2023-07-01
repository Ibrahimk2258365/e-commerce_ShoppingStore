import { productModel } from '../model/Product.js';
// Add a product
export const addProduct = async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const product = new productModel({ name, price, image });
    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: 'Failed to add product', error });
  }
};

// Retrieve all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve products', error });
  }
};

// Update a product
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image } = req.body;
    const updatedProduct = await productModel.findByIdAndUpdate(
      id,
      { name, price, image },
      { new: true }
    );
    if (updatedProduct) {
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to update product', error });
  }
};

// Delete a product
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productModel.findByIdAndDelete(id);
    if (deletedProduct) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete product', error });
  }
};
