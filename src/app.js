const express=require('express');
const app=express();
const puerto=80;

app.use(express.json());

app.get('/', function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.send('Artesanias');
});

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});