const connection = require('../config/connection_db');

function createUser(username, password, role){
    const sql = 'INSERT INTO Users (username, password, role) VALUES (?, ?, ?)';
    connection.query(sql, [username, password, role], (err, result) => {
        if (err) {
            console.error('Error: ', err);
            return;
        }
        console.log("User created successfully: ", result.insertId);
    });
}
module.exports = createUser;
