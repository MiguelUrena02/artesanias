const {connectMySQL} = require ('../dbconnection');

class ArtesaniasModel{
    static async consultar(){
        let db = await connectMySQL();
        let query = db ('artesanias');
        return await query;
    }
    
    static async consultarPorId(id){
        let db = await connectMySQL();
        return await db('artesanias').where('id_artesania',id);
    }
    
    static async insertar(datos) {
        let db = await connectMySQL();
        const result = await db('artesanias').insert(datos).returning('id_artesania');
        return result[0];
    }
}

module.exports= ArtesaniasModel;