const express = require('express');
const app = express();

const PORT = 8000;

app.listen(PORT, function(){
    console.log("Server rodando")
})

app.get('/', function(req, res){
    console.log("Alguém requisitou")
    console.log(req.query)
})