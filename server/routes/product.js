const express = require('express');
const admin = require("../middlewares/admin");
const Product = require("../models/product");
const productRouter = express.Router();
const auth = require('../middlewares/auth')

// api/products?category = Essentials
// api/amazon?theme = dark
// console.log(req.query.theme);

// api/products:category = Essentials
// console.log(req.params.category)
productRouter.get('/api/products', auth, async (req, res) => {
    // console.log('aaa');
    try {
        console.log(req.query.category);
        const products = await Product.find({category: req.query.category});
        res.json(products);
    } catch (e) {
        res.status(500).json({error: e.message})
    }
})

module.exports = productRouter;