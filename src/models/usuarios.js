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

    static async insertar(datos) {
        let db = await connectMySQL();
        const result = await db('usuarios').insert(datos).returning('id_usuario');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectMySQL();
        return await db('usuarios').where('id_usuario', id).update(campos);
    }
}

module.exports= UsuariosModel;