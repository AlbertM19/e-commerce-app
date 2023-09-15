module.exports = (app) => {
     const products = require('../controllers/product.controller');
     let router = require('express').Router();

     router.post('/', products.create);

     router.get('/', products.findAll);

     router.get('/:id', products.findOne);

     router.put('/:id', products.update)

     app.use('/api/products', router);
}