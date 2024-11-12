const connection = require('../config/connection_db');

function createUser(username, password, role) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Users (username, password, role) VALUES (?, ?, ?)';
        connection.query(sql, [username, password, role], (err, results) => {
            if (err) {
                console.error('Error: ', err);
                return reject(err);
            }
            console.log('User created successfully: ', results);
            resolve(results);
        });
    });
}
function getUsers(username) {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM Users WHERE username = ?';
        connection.query(sql, [username], (err, results) => {
            if (err) {
                console.error('User search error', err);
                return reject(err);
            }
            resolve(results[0]);
        });
    });
}

module.exports = { createUser, getUsers };
