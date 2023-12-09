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

    static async insertar(datos) {
        let db = await connectMySQL();
        const result = await db('carritos').insert(datos).returning('id_carrito');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMySQL();
        return await db('carritos').where('id_carrito', id).update(campos);
    }
}

module.exports= CarritoModel;