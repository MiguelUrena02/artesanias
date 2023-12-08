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
}

module.exports= TAModel;