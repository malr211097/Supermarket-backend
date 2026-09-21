const {
    SaleDetail,
    Sale,
    Product
} = require('../models')

class SaleDetailService {

    static async calculateSaleTotal(saleId) {
        const saleDetails = await SaleDetail.findAll({
            where: { saleId }
        })

        const total = saleDetails.reduce((sum, detail) => {
            return sum + Number(detail.price) * detail.quantity
        }, 0)

        const sale = await Sale.findByPk(saleId)

        if (sale) {
            await sale.update({
                total: total.toFixed(2)
            })
        }
    }

    static async getAllSaleDetails() {
        return await SaleDetail.findAll({
            order: [['id', 'ASC']]
        })
    }

    static async getSaleDetailById(id) {
        const saleDetail = await SaleDetail.findByPk(id)

        if (!saleDetail) {
            throw new Error('Sale detail not found')
        }

        return saleDetail
    }

    static async createSaleDetail(saleDetailData) {
        const {
            saleId,
            productId,
            quantity
        } = saleDetailData

        const sale = await Sale.findByPk(saleId)

        if (!sale) {
            throw new Error('Sale not found')
        }

        const product = await Product.findByPk(productId)

        if (!product) {
            throw new Error('Product not found')
        }

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than 0')
        }

        const saleDetail = await SaleDetail.create({
            saleId,
            productId,
            quantity,
            price: product.price
        })

        await this.calculateSaleTotal(saleId)

        return saleDetail
    }

    static async updateSaleDetail(id, saleDetailData) {
        const saleDetail = await SaleDetail.findByPk(id)

        if (!saleDetail) {
            throw new Error('Sale detail not found')
        }

        const oldSaleId = saleDetail.saleId

        const saleId = saleDetailData.saleId ?? saleDetail.saleId
        const productId = saleDetailData.productId ?? saleDetail.productId
        const quantity = saleDetailData.quantity ?? saleDetail.quantity

        const sale = await Sale.findByPk(saleId)

        if (!sale) {
            throw new Error('Sale not found')
        }

        const product = await Product.findByPk(productId)

        if (!product) {
            throw new Error('Product not found')
        }

        if (quantity <= 0) {
            throw new Error('Quantity must be greater than 0')
        }

        let price = saleDetail.price

        if (productId !== saleDetail.productId) {
            price = product.price
        }

        await saleDetail.update({
            saleId,
            productId,
            quantity,
            price
        })

        await this.calculateSaleTotal(oldSaleId)

        if (saleId !== oldSaleId) {
            await this.calculateSaleTotal(saleId)
        }

        return saleDetail
    }

    static async deleteSaleDetail(id) {
        const saleDetail = await SaleDetail.findByPk(id)

        if (!saleDetail) {
            throw new Error('Sale detail not found')
        }

        const saleId = saleDetail.saleId

        await saleDetail.destroy()

        await this.calculateSaleTotal(saleId)

        return {
            message: 'Sale detail deleted successfully'
        }
    }
}

module.exports = SaleDetailService