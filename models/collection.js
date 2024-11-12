const connection = require('../config/connection_db');

function createCollection(date, route, materials, weight, vehicle, documents, createdBy) {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO Collections (date, route, materials, weight, vehicle, documents, createdBy) VALUES (?, ?, ?, ?, ?, ?, ?)';
        connection.query(query, [date, route, materials, weight, vehicle, documents, createdBy], (err, results) => {
            if (err) {
                console.error('Error: ', err);
                return reject(err);
            }
            console.log('Collection successfully created: ', results);
            resolve(results);
        });
    });
}
function getCollections() {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM Collections';
        connection.query(query, (err, results) => {
            if (err) {
                console.error('Erro ao buscar coletas:', err);
                return reject(err);
            }
            console.log('Coletas encontradas:', results);
            resolve(results);
        });
    });
}

module.exports = { createCollection, getCollections };
