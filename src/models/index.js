const sequelize = require('../config/database')
const User = require('./user.model')
const Provider = require('./provider.model')
const Product = require('./product.model')
const Sale = require('./sale.model')
const SaleDetail = require('./saleDetail.model')

Provider.hasMany(Product, {
    foreignKey: 'providerId',
    as: 'products',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Product.belongsTo(Provider, {
    foreignKey: 'providerId',
    as: 'provider'
})

User.hasMany(Sale, {
    foreignKey: 'userId',
    as: 'sales',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

Sale.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user'
})

Sale.hasMany(SaleDetail, {
    foreignKey: 'saleId',
    as: 'saleDetails',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

SaleDetail.belongsTo(Sale, {
    foreignKey: 'saleId',
    as: 'sale'
})

Product.hasMany(SaleDetail, {
    foreignKey: 'productId',
    as: 'saleDetails',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'
})

SaleDetail.belongsTo(Product, {
    foreignKey: 'productId',
    as: 'product'
})

module.exports = {
    sequelize,
    User,
    Provider,
    Product,
    Sale,
    SaleDetail
}