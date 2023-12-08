const {connectMySQL} = require ('../dbconnection');

class UsuariosModel{
    static async consultar(){
        let db = await connectMySQL();
        let query = db ('usuarios');
        return await query;
    }
    
    static async consultarPorId(id){
        let db = await connectMySQL();
        return await db('usuarios').where('id_usuario',id);
    }
}

module.exports= UsuariosModel;