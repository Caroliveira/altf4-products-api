const express = require('express')
const router = express.Router();
const ProductController = require('./ProductController');

router.get('/products', ProductController.all);
router.get('/products/:id', ProductController.findById);
router.post('/products', ProductController.create);
router.put('/products/:id', ProductController.update);
router.delete('/products/:id', ProductController.delete);

module.exports = router;