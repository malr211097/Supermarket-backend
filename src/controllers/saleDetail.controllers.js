const SaleDetailService = require('../services/saleDetail.service')

class SaleDetailController {
    static async getAllSaleDetails(req, res) {
        try {
            const saleDetails = await SaleDetailService.getAllSaleDetails()

            return res.status(200).json({
                message: 'Sale details retrieved successfully',
                data: saleDetails
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async getSaleDetailById(req, res) {
        try {
            const { id } = req.params
            const saleDetail = await SaleDetailService.getSaleDetailById(id)

            return res.status(200).json({
                message: 'Sale detail retrieved successfully',
                data: saleDetail
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async createSaleDetail(req, res) {
        try {
            const saleDetailData = req.body
            const saleDetail = await SaleDetailService.createSaleDetail(
                saleDetailData
            )

            return res.status(200).json({
                message: 'Sale detail created successfully',
                data: saleDetail
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async updateSaleDetail(req, res) {
        try {
            const { id } = req.params
            const saleDetailData = req.body
            const saleDetail = await SaleDetailService.updateSaleDetail(
                id,
                saleDetailData
            )

            return res.status(200).json({
                message: 'Sale detail updated successfully',
                data: saleDetail
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }

    static async deleteSaleDetail(req, res) {
        try {
            const { id } = req.params
            const result = await SaleDetailService.deleteSaleDetail(id)

            return res.status(200).json({
                message: 'Sale detail deleted successfully',
                data: result
            })
        } catch (error) {
            return res.status(500).json({
                message: error.message
            })
        }
    }
}

module.exports = SaleDetailController