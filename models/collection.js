const connection = require('../config/connection_db');

function createCollection(date, route, materials, weight, vehicle, documents, createdBy ){
    const query = 'INSERT INTO Collections (date, route, materials, weight, vehicle, documents, createdBy) VALUES (?, ?, ?, ?, ?, ?, ?)';
    connection.query(query, [date, route, materials, weight, vehicle, documents, createdBy], (err, results) => {
        if(err){
            console.error('Error: ', err);
            return;
        }
        console.log('Collection successfully created ', results);
    });
}
module.exports = {createCollection};