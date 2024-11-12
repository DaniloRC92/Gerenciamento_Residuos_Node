const connection = require('../config/connection_db');

function createMaterial(type, subtype, value) {
    return new Promise((resolve, reject) => {
        const sql = 'INSERT INTO Materials (type, subtype, value) VALUES (?, ?, ?)';
        connection.query(sql, [type, subtype, value], (err, results) => {
            if (err) {
                console.error('Error: ', err);
                return reject(err);
            }
            console.log('Material successfully created: ', results);
            resolve(results);
        });
    });
}
function getMaterials() {
    return new Promise((resolve, reject) => {
        const sql = 'SELECT * FROM Materials';
        connection.query(sql, (err, results) => {
            if (err) {
                console.error('Error when searching for materials: ', err);
                return reject(err);
            }
            console.log('Materials found: ', results);
            resolve(results);
        });
    });
}

module.exports = { createMaterial, getMaterials };
