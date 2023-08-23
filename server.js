const express =  require("express");
const http = require('http');
const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
app.get("/", (req, res) => {
    res.send("Hello word");
})
app.listen(port, ()=>{
    console.log("the app is nunning on: ", port);
});