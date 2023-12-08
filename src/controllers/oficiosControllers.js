const OficiosModel = require('../models/oficios');

class OficiosControllers{
    static async indexGet(req, res){
        let data = await OficiosModel.consultar();
        res.send(data);
    }

    static async itemGet(req,res){
        let id = req.params.id;
        let data = await OficiosModel.consultarPorId(id);
        if(data.length == 0){
            res.status(404).send({errno: 404,error: 'Not found'});
            return;
        }
        res.send(data[0]); 
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await OficiosModel.insertar(newData);

            res.status(201)
                .header('Location', `/oficios/${insertedId}`)
                .send({status: 201, message: 'Created'});
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = OficiosControllers;