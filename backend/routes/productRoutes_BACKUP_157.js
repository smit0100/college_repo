const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.post('/add', productController.createProduct);
<<<<<<< HEAD
=======
router.get('/fetchAll', productController.fetchAllProduct);

>>>>>>> 97979641ecdfefcb51f53f426fa0cd653705f980
module.exports = router