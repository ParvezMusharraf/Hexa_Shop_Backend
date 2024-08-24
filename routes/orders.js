const express = require("express")
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.status(200).json({
        messge:"You have get product"
    })
})
router.post('/',(req,res,next)=>{
    const order = {
        productId : req.body.productId,
        quantity : req.body.quantity
    }
    res.status(201).json({
        messge:"You have created a Order",
        createdOrder:order
    })
})

module.exports= router;