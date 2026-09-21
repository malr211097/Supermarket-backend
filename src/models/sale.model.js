const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const Sale = sequelize.define('Sale', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
            isDate: {
                msg: 'Sale date must be a valid date'
            }
        }
    },
    total: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00,
        validate: {
            min: {
                args: [0.00],
                msg: 'Sale total can not be negative'
            }
        }
    }
}, {
    tableName: 'sale',
    timestamps: true,
    paranoid: true
})

module.exports = Sale