import express from 'express'
import { getAllProduct } from '../controllers/productController.js';
const router = express.Router();

router.route('/product').post(getAllProduct)


export default router;