const {connectMySQL} = require ('../dbconnection');

class TAModel{
    static async consultar(){
        let db = await connectMySQL();
        let query = db ('tipo_de_artesanias');
        return await query;
    }
    
    static async consultarPorId(id){
        let db = await connectMySQL();
        return await db('tipo_de_artesanias').where('id_tipo',id);
    }

    static async insertar(datos) {
        let db = await connectMySQL();
        const result = await db('tipo_de_artesanias').insert(datos).returning('id_tipo');
        return result[0];
    }
}

module.exports= TAModel;