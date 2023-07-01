import express from 'express';
import {
  addProduct,
  getAllProducts,
  updateProduct,
  deleteProduct
} from '../controller/product.js';

const productRouter = express.Router();

productRouter.post('/', addProduct);
productRouter.get('/', getAllProducts);
productRouter.put('/:id', updateProduct);
productRouter.delete('/:id', deleteProduct);

export default productRouter;


