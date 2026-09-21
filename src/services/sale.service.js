const { Sale, User } = require('../models')

class SaleService {

    static async getAllSales() {
        return await Sale.findAll({
            order: [['date', 'DESC']]
        })
    }

    static async getSaleById(id) {
        const sale = await Sale.findByPk(id)

        if (!sale) {
            throw new Error('Sale not found')
        }

        return sale
    }

    static async createSale(saleData) {
        const { userId, date } = saleData

        const user = await User.findByPk(userId)

        if (!user) {
            throw new Error('User not found')
        }

        const sale = await Sale.create({
            userId,
            date,
            total: 0
        })

        return sale
    }

    static async updateSale(id, saleData) {
        const sale = await Sale.findByPk(id)

        if (!sale) {
            throw new Error('Sale not found')
        }

        const { userId, date } = saleData

        if (userId) {
            const user = await User.findByPk(userId)

            if (!user) {
                throw new Error('User not found')
            }
        }

        const updatedData = {
            userId,
            date
        }

        await sale.update(updatedData)

        return sale
    }

    static async deleteSale(id) {
        const sale = await Sale.findByPk(id)

        if (!sale) {
            throw new Error('Sale not found')
        }

        await sale.destroy()

        return {
            message: 'Sale deleted successfully'
        }
    }
}

module.exports = SaleService