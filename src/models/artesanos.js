const {connectMySQL} = require ('../dbconnection');

class ArtesanosModel{
    static async consultar(){
        let db = await connectMySQL();
        let query = db ('artesanos');
        return await query;
    }
    
    static async consultarPorId(id){
        let db = await connectMySQL();
        return await db('artesanos').where('id_artesano',id);
    }

    static async insertar(datos) {
        let db = await connectMySQL();
        const result = await db('artesanos').insert(datos).returning('id_artesano');
        return result[0];
    }
}

module.exports= ArtesanosModel;