const express=require('express');
const app=express();
const puerto=80;
const ArtesaniasControllers = require ('./controllers/artesaniasControllers');
const ArtesanosControllers = require('./controllers/artesanosControllers');
const CarritosControllers = require('./controllers/carritosControllers');
const OficiosControllers = require('./controllers/oficiosControllers');
const TAControllers = require('./controllers/tipo_de_artesaniasControllers');
const UsuariosControllers = require('./controllers/usuariosControllers');


app.use(express.json());

app.get('/', function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    res.send('Artesanias');
});

app.get('/artesanias', ArtesaniasControllers.indexGet);
app.get('/artesanias/:id([0-9]+)', ArtesaniasControllers.itemGet);

app.get('/artesanos', ArtesanosControllers.indexGet);
app.get('/artesanos/:id([0-9]+)', ArtesanosControllers.itemGet);

app.get('/carritos', CarritosControllers.indexGet);
app.get('/carritos/:id([0-9]+)', CarritosControllers.itemGet);

app.get('/oficios', OficiosControllers.indexGet);
app.get('/oficios/:id([0-9]+)', OficiosControllers.itemGet);

app.get('/tipo_de_artesanias', TAControllers.indexGet);
app.get('/tipo_de_artesanias/:id([0-9]+)', TAControllers.itemGet);

app.get('/usuarios', UsuariosControllers.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosControllers.itemGet);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});