import express from "express";

// import controllers
import {
    getProducts,
    getProductById,
    saveProduct,
    updateProduct,
    deleteProduct
} from "../controllers/productController.js";

// express router
const router = express.Router();

// Route get all products 
router.get('/', getProducts);
// Route get single product
router.get('/:id', getProductById);
// Route create product
router.post('/', saveProduct);
// Route update product
router.patch('/:id', updateProduct);
// Route delete product
router.delete('/:id', deleteProduct);
 
export default router;