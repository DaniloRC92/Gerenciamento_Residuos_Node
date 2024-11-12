const jwt = require('jsonwebtoken');
const { createUser, getUsers } = require('../models/user');
const SECRET_KEY = process.env.SECRET_KEY || 'code1234*';

function registerUser(req, res) {
    const { username, password, role } = req.body;
    createUser(username, password, role)
        .then(() => res.status(201).json({ message: 'User successfully registered' }))
        .catch(err => res.status(500).json({ error: 'Error registering user' }));
}

function loginUser(req, res) {
    const { username, password } = req.body;

    getUsers(username)
        .then(user => {
            if (!user || user.password !== password) {
                return res.status(401).json({ error: 'Invalid credentials' });
            }
            const token = jwt.sign({ id: user.id, role: user.role }, SECRET_KEY, { expiresIn: '30min' });
            res.status(200).json({ message: 'Successful login', token });
        })
        .catch(err => res.status(500).json({ error: 'Login error' }));
}

module.exports = { registerUser, loginUser };
