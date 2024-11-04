const connection = require('../config/connection_db');

function createMaterial(type, subtype, value){
    const query = 'INSERT INTO Materials (type, subtype, value) VALUES (?, ?, ?)';
    connection.query(query, [type, subtype, value], (err, results) => {
        if(err){
            console.error('Error: ', err);
            return;
        }
        console.log('Material successfully created ', results);
    });
}
module.exports = createMaterial;