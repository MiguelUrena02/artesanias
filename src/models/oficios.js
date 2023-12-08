const {connectMySQL} = require ('../dbconnection');

class OficiosModel{
    static async consultar(){
        let db = await connectMySQL();
        let query = db ('oficios');
        return await query;
    }
    
    static async consultarPorId(id){
        let db = await connectMySQL();
        return await db('oficios').where('id_oficio',id);
    }
}

module.exports= OficiosModel;