const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Enzo2805$',
    database: 'portal_aprendizado'
});

module.exports = connection;