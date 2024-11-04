const connection = require('../config/connection_db');

function createUser(username, password, role){
    const query = 'INSERT INTO Users (username, password, role) VALUES (?, ?, ?)';
    connection.query(query, [username, password, role], (err, result) => {
        if (err) {
            console.error('Error: ', err);
            return;
        }
        console.log("User created successfully: ", result.insertId);
    });
}
module.exports = createUser;
