const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");

// Create Product -- Admin route
exports.createProduct = async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true, 
        product
    })
    }
//Get All Products 
exports.getAllProducts = async (req, res) => {

    const products = await Product.find();

    res.status(200).json({
        success: true,
        products
    })
}

//Get Product Details
exports.getProductDetails = async(req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("product Not Found", 404));
    }

     res.status(200).json({
        status: true,
        product,
    })
}

// Update Product -- Admin route
exports.updateProduct = async(req, res, next) => {

    let product = await Product.findById(req.params.id);
    if( !product) {
        return res.status(500).json({
            status:false,
            messsage: "Product Not Found"
        })

    }
    product = await Product.findByIdAndUpdate(req.params.id, req.body, {        
        new: true,
        runValidators:true,
        useFindAndModify: false});
        
        res.status(200).json({
            success:true,
            product 
        })
    
    }

    // Delete product

exports.deleteProduct = async(req, res, next) => {

    const product = await Product.findById(req.params.id);

    if(!product) {
        return res.status(500).json({
            status: false,
            message: "Product not found"
        })
    }

    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
        status: true,
        message: "Product Deleted Succesfully"
    })
}