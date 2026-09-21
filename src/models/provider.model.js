const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Provider = sequelize.define('Provider', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Name can not be empty'
            },
            len: {
                args: [1, 60],
                msg: 'Name must be between 1 and 60 characters'
            }
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Phone can not be empty'
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                msg: 'Email format is invalid'
            },
            notEmpty: {
                msg: 'Email can not be empty'
            }
        }
    },
    city: {
        type: DataTypes.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'City can not be empty'
            }
        }
    }
}, {
    tableName: 'provider',
    timestamps: true,
    paranoid: true
})

module.exports = Provider