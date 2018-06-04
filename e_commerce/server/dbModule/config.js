const mysql = require('mysql');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'pakistan',
        database: 'BlogPost'
    }
);

module.exports = connection;