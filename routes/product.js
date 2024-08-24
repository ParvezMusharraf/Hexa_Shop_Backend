const express = require("express")
const router = express.Router()



router.get('/',(req,res,next)=>{
    res.status(200).json({
        messge:"handling Get Request to products"
    })
})


router.post('/',(req,res,next)=>{
    const product = {
        name : req.body.name,
        price : req.body.price
    }
    res.status(200).json({
        messge:"handling post request to product",
        createdProduct :product
    })
})


router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;

    if(id === "spacialId"){
        res.status(200).json({
            messge:"Its a specialId",
            id:id
        })
    }else{
        res.status(200).json({
            messge:"You have passed id",
            id:id
        })
    }
})
router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    if(id === null){
        res.status(200).json({
            messge:"id connot be null"
        })
    }else{
        res.status(200).json({
            messge:"you have update product"
        })
    }
})
router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;

    if(id === null){
        res.status(200).json({
            messge:"ID Connot be bull",
        })
    }else{
        res.status(200).json({
            messge:"You have deleted product",
        })
    }
})


module.exports= router;