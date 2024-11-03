const {Sequelize, DataTypes} = require('sequelize');
const connection = require('../config/connection_db');

const User = connection.define('User', {
    username: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    role: {type: DataTypes.STRING, allowNull: false}
});

module.exports = User;