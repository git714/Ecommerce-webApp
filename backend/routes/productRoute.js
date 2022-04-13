const express=require("express");
const Product = require("../models/Product");
const router=express.Router();


// for posting
router.post('/product/create',(req,res)=>{
    const productObj={
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        category: req.body.category,
        quantity:req.body.quantity ,
        sold: req.body.sold,
        photo: req.body.photo,
        shipping: req.body.shipping
    }
    
    const cat=new Product(productObj)
    cat.save().then((product)=>{
        res.status(200).json({
            message: 'data added successfully',
                success: true,
                userData: product
        })
    }).catch((err)=>{
        res.status(401).json({
            message: 'Error in adding user',
            success: false,
            error: err.message
        })
    })
})

// for finding
router.get('/product/find',(req,res)=>{
    Product.find().then((product)=>{
        res.status(200).json(
            product
        )
    }).catch((err)=>{
        res.status(401).json({
            message: 'Error in fetching data',
            success: false,
            error: err.message
        })
    })
})



// for deleting
router.get("/product/delete/:id", (req, res) => {

    Product.deleteOne({ _id: req.params.id }).then((result) => {
        Product.find().then((data)=>{ res.status(200).json(
            data
        )})
       
        
    }).catch((err) => {
        res.status(401).json({
            message: 'Error in deleting user',
            success: false,
            error: err.message
        })
    })
})

// for updating
router.post('/product/update/:id',(req,res)=>{
    const productObj={
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        category: req.body.category,
        quantity:req.body.quantity ,
        sold: req.body.sold,
        photo: req.body.photo,
        shipping: req.body.shipping
    
  
    }
   
    Product.findOneAndUpdate({ _id: req.params.id }, { $set:productObj}).then((result) => {Product.find().then((data)=>{
        res.status(200).json(
            data   
        )})   
    }).catch((err)=>{
        res.status(401).json({
            message: 'Error in updating user',
            success: false,
            error: err.message
        })
    })
})
module.exports = router