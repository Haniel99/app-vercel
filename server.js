const app = require('./src/app');
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("the app is nunning on: ", port);
});