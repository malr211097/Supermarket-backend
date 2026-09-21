const { DataTypes } = require('sequelize')
const sequelize = require('../config/database')

const SaleDetail = sequelize.define('SaleDetail', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    saleId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    productId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: {
                args: [1],
                msg: 'Quantity must be a positive number'
            }
        }
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: {
                args: [0.01],
                msg: 'Price must be greater than 0'
            }
        }
    }
}, {
    tableName: 'saleDetail',
    timestamps: true,
    paranoid: true
})

module.exports = SaleDetail