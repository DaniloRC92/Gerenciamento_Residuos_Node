// Chamada do modulo mysql;
const mysql = require('mysql2');

// Cria a conexão com o banco de dados, passando os parametros correspondentes;
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Daniboygb12*',
    database: 'gerenciamento'
});

// Verifica se a conexão foi bem sucedida;
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

module.exports = connection;