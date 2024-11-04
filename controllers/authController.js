const connection = require('../config/connection_db');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'code1234*';

function registerUser(req, res){
    const {username, password, role} = req.body;
    const sql = 'INSERT INTO Users (username, password, role) VALUES (?, ?, ?)';
    
    connection.query(sql, [username, password, role], (err, res) => {
        if(err){
            return res.status(500).json({error: 'Error registering user'});
        }
        res.status(201).json({message: 'User successfully registered'})
    });
}
function loginUser(req, res){
    const {username, password} = req.body;
    const sql = 'SELECT * FROM Users WHERE username = ?';

    connection.query(sql, [username], (err, results) => {
        if (err || results.length === 0) {
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const user = results[0];
        if(password != user.password){
            return res.status(401).json({error: 'Invalid credentials'});
        }

        const token = jwt.sign({id: user.id, role: user.role}, SECRET_KEY, {expiresIN: '30min'});
        res.status(200).json({message: 'Login done, welcome!', token})
    });
}
module.exports = {registerUser, loginUser};