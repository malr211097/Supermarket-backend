const { Product } = require('../models')
const { Op } = require('sequelize')

class ProductService {

    static async getAllProducts() {
        return await Product.findAll({
            order: [['name', 'ASC']]
        })
    }

    static async getProductById(id) {
        const product = await Product.findByPk(id)

        if (!product) {
            throw new Error('Product not found')
        }

        return product
    }

    static async createProduct(productData) {
        const {
            name,
            description,
            price,
            stock,
            providerId
        } = productData

        const existingProduct = await Product.findOne({
            where: { name }
        })

        if (existingProduct) {
            throw new Error('Product name already exists')
        }

        if (price <= 0) {
            throw new Error('Product price must be greater than 0')
        }

        if (stock < 0) {
            throw new Error('Product stock can not be negative')
        }

        const product = await Product.create({
            name,
            description,
            price,
            stock,
            providerId
        })

        const createdProduct = product.toJSON()

        return createdProduct
    }

    static async updateProduct(id, productData) {
        const product = await Product.findByPk(id)

        if (!product) {
            throw new Error('Product not found')
        }

        const {
            name,
            description,
            price,
            stock,
            providerId
        } = productData

        if (name) {
            const existingName = await Product.findOne({
                where: {
                    name,
                    id: {
                        [Op.ne]: id
                    }
                }
            })

            if (existingName) {
                throw new Error('Product name already exists')
            }
        }

        if (price !== undefined && price <= 0) {
            throw new Error('Product price must be greater than 0')
        }

        if (stock !== undefined && stock < 0) {
            throw new Error('Product stock can not be negative')
        }

        const updatedData = {
            name,
            description,
            price,
            stock,
            providerId
        }

        await product.update(updatedData)

        const updatedProduct = product.toJSON()

        return updatedProduct
    }

    static async deleteProduct(id) {
        const product = await Product.findByPk(id)

        if (!product) {
            throw new Error('Product not found')
        }

        await product.destroy()

        return {
            message: 'Product deleted successfully'
        }
    }
}

module.exports = ProductService