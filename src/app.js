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
/* Funcion GET Artesanias */
app.get('/artesanias', ArtesaniasControllers.indexGet);
app.get('/artesanias/:id([0-9]+)', ArtesaniasControllers.itemGet);

/* Funcion POST Artesanias */
app.post('/artesanias', ArtesaniasControllers.indexPost);


/* Funcion GET Artesanos */
app.get('/artesanos', ArtesanosControllers.indexGet);
app.get('/artesanos/:id([0-9]+)', ArtesanosControllers.itemGet);

/* Funcion POST Artesanos */
app.post('/artesanos', ArtesanosControllers.indexPost);

/* Funcion GET Carritos */
app.get('/carritos', CarritosControllers.indexGet);
app.get('/carritos/:id([0-9]+)', CarritosControllers.itemGet);

/* Funcion POST Carritos */
app.post('/carritos', CarritosControllers.indexPost);

/* Funcion GET Oficios */
app.get('/oficios', OficiosControllers.indexGet);
app.get('/oficios/:id([0-9]+)', OficiosControllers.itemGet);

/* Funcion POST Oficios */
app.post('/oficios', OficiosControllers.indexPost);

/* Funcion GET Tipo de Artesanias */
app.get('/tipo_de_artesanias', TAControllers.indexGet);
app.get('/tipo_de_artesanias/:id([0-9]+)', TAControllers.itemGet);

/* Funcion POST Tipo de Artesanias */
app.post('/tipo_de_artesanias', TAControllers.indexPost);

/* Funcion GET Usuarios */
app.get('/usuarios', UsuariosControllers.indexGet);
app.get('/usuarios/:id([0-9]+)', UsuariosControllers.itemGet);

/* Funcion POST Usuarios */
app.post('/usuarios', UsuariosControllers.indexPost);

app.listen(puerto, function(){
    console.log("Servidor en espera http://localhost");
});