const fs  = require('fs');
const knex = require ('knex');

async function connectMySQL (){
    const mysqlPassword = await fs.promises.readFile('/run/secrets/MYSQL_PASSWORD');

    const db = knex({
        client: 'mysql2',
        connection:{
            host: 'mysql',
            user: 'user_artesanias',
            password: mysqlPassword,
            database: 'plataforma_artesanias'
        }
    });
    return db;
}

module.exports = {
    connectMySQL
};