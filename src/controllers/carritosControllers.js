const CarritoModel = require('../models/carritos');

class CarritoControllers{
    static async indexGet(req, res){
        let data = await CarritoModel.consultar();
        res.send(data);
    }

    static async itemGet(req,res){
        let id = req.params.id;
        let data = await CarritoModel.consultarPorId(id);
        if(data.length == 0){
            res.status(404).send({errno: 404,error: 'Not found'});
            return;
        }
        res.send(data[0]); 
    }
}

module.exports = CarritoControllers;