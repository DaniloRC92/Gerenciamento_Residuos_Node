const connection = require('../config/connection_db');

function createMaterial(type, subtype, value){
    const sql = 'INSERT INTO Materials (type, subtype, value) VALUES (?, ?, ?)';
    connection.query(sql, [type, subtype, value], (err, results) => {
        if(err){
            console.error('Error: ', err);
            return;
        }
        console.log('Material successfully created ', results);
    });
}
module.exports = createMaterial;