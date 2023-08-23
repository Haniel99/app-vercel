const express =  require("express");
const app = express();

app.get('/',(req,res)=>{
    res.status(200).json({
      message:'Serverss is ssuccefully'
    })
  })
app.get('/index', (req,res)=>{
    res.status(200).json({
        msg: "Hola"
    })
})
module.exports = app;