const express = require("express")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send({
        status:200
    })
})
app.post("/",(req,res)=>{
    const data=req.body
    res.send({
        status:200,
        data:data
    })
    
})

app.listen(3002,()=>{
console.log("all thing is good")
})