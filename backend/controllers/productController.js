const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");


// Create Product -- Admin route
exports.createProduct = catchAsyncErrors(
    async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true, 
        product
    })
    })
    
//Get All Products 
exports.getAllProducts = catchAsyncErrors(
    async (req, res) => {

        const resultPerPage = 5;
        const productCount = await Product.countDocuments();

        const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
        // const products = await Product.find();
        const products = await apiFeature.query;
    
        res.status(200).json({
            success: true,
            products,
            productCount
        })
    });

//Get Product Details
exports.getProductDetails = catchAsyncErrors(
    async(req, res, next) => {

        const product = await Product.findById(req.params.id);
    
        if(!product) {
            return next(new ErrorHandler("product Not Found", 404));
        }
    
         res.status(200).json({
            status: true,
            product,
        })
    });

// Update Product -- Admin route
exports.updateProduct = catchAsyncErrors(
    async(req, res, next) => {

        let product = await Product.findById(req.params.id);
        if(!product) {
            return next(new ErrorHandler("product Not Found", 404));
        } 
        
        product = await Product.findByIdAndUpdate(req.params.id, req.body, {        
            new: true,
            runValidators:true,
            useFindAndModify: false});
            
            res.status(200).json({
                success:true,
                product 
            })
        
        });

    // Delete product

exports.deleteProduct = catchAsyncErrors(
    async(req, res, next) => {

        const product = await Product.findById(req.params.id);
    
        if(!product) {
            return next(new ErrorHandler("product Not Found", 404));
        }
    
        await Product.findByIdAndDelete(req.params.id);
    
        res.status(200).json({
            status: true,
            message: "Product Deleted Succesfully"
        })
    });