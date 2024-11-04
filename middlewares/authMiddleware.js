const jwt = require('jsonwebtoken');
const SECRET_KEY = 'code1234*';

function verifyToken(req, res, next){
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({error: 'Token not supplied'});
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({error: 'Invalid Token'});
        }
        req.userID = decoded.id;
        req.userRole = decoded.role;
        next();
    });
}

function checkRole(requiredRole) {
    return (req, res, next) => {
        if (req.userRole !== requiredRole) {
            return res.status(403).json({error: 'Access denied'});
        }
        next();
    };
}
module.exports = {verifyToken, checkRole};