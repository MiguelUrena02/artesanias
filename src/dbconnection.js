const knex = require ('knex');
const fs  = require('fs');

async function connectMySQL (){
    const mysqlPassword = await fs.promises.readFile('/run/secrets/mysqlPassword');

    const db = knex({
        client: 'mysql2',
        connection:{
            host: 'mysql',
            user: 'user_admin',
            password: mysqlPassword,
            database: 'plataforma_artesanias'
        }
    });
    return db;
}

module.exports = {
    connectMySQL
};