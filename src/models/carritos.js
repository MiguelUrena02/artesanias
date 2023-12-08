const {connectMySQL} = require ('../dbconnection');

class CarritoModel{
    static async consultar(){
        let db = await connectMySQL();
        let query = db ('carritos');
        return await query;
    }
    
    static async consultarPorId(id){
        let db = await connectMySQL();
        return await db('carritos').where('id_carrito',id);
    }
}

module.exports= CarritoModel;