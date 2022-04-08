const express=require("express");
var app = express();
const router=express.Router();
const Category=require("../models/Category")

// for posting
router.post('/category/create',(req,res)=>{
    const categoryObj={
        name:req.body.name
  
    }
    if(req.body.parentid){
        categoryObj.parentid=req.body.parentid;
    }
    const cat=new Category(categoryObj)
    cat.save().then((category)=>{
        res.status(200).json({
            message: 'data added successfully',
                success: true,
                userData: category
        })
    }).catch((err)=>{
        res.status(401).json({
            message: 'Error in updating user',
            success: false,
            error: err.message
        })
    })
})

// for finding
router.get('/category/find',(req,res)=>{
    Category.find().then((category)=>{
        res.status(200).json(
             category
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
router.get("/category/delete/:id", (req, res) => {

    Category.deleteOne({ _id: req.params.id }).then((result) => {
        Category.find().then((data)=>{ res.status(200).json(
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
router.post('/category/update/:id',(req,res)=>{
    const categoryObj={
        name:req.body.name
  
    }
    if(req.body.parentid){
        categoryObj.parentid=req.body.parentid;
    }
    Category.findOneAndUpdate({ _id: req.params.id }, { $set:categoryObj}).then((result) => {Category.find().then((data)=>{
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