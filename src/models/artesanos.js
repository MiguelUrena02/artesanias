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
}

module.exports= ArtesanosModel;