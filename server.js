const express = require('express')
const app = express()
const PORT =    process.env.PORT || 3000;
const morgan = require("morgan")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const url = "mongodb://localhost:27017/PracticeDatabase"

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    )
    if(req.method === "OPTIONS"){
        res.header("Access-Control-Allow-Metods",'PUT, POST, PATCH, DELETE,GET')
        res.status(200).json({})
    }
    next()
})


// import routers
const productRoutes = require("./routes/product")
const orderRoutes = require("./routes/orders")


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// api routes
app.use('/api/product',productRoutes);
app.use('/api/order',orderRoutes);

const connect = ()=>{
    try {
        mongoose.connect(url)
    .then(() => {
        console.log("Connected to database");
    })
    } catch (error) {
        console.error("Database connection error:", err);

    }
}


// if routes not found
app.use((req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message : error.message
        }
    })
})

// app listning 
app.listen(PORT,()=>{
    try {
        connect()
        console.log(`Server Started At ${PORT}`)
    } catch (error) {
        console.log(error)
    }
})

