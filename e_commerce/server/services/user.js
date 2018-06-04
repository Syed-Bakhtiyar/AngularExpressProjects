const TABLES = require('../dbModule/tables-name');

module.exports = (connection)=>{
    const createUser = (user) => {
        const query = `INSERT INTO ${TABLES.USERS_TABLE} (first_name, last_name, email, password) VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${user.password}')`;
        return new Promise((resolve, reject)=>{
            connection.query(query, (err, rows)=>{
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }
    
    const getUserForAuthentication = (user) => {
        const query = `SELECT * FROM ${TABLES.USERS_TABLE} WHERE email = '${user.email}'`;
        return new Promise((resolve, reject) => {
            connection.query(query, (err, rows) => {
                if(err){
                    reject(err);
                }
                resolve(rows);
            });
        });
    }

    return {createUser, getUserForAuthentication}
}