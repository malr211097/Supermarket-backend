const express = require('express')
const SaleDetailController = require('../controllers/saleDetail.controllers')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   - name: SaleDetails
 *     description: Administración de detalles de venta del supermercado
 *
 * components:
 *   schemas:
 *     SaleDetail:
 *       type: object
 *       required:
 *         - saleId
 *         - productId
 *         - quantity
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         saleId:
 *           type: integer
 *           example: 1
 *         productId:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 2
 *         price:
 *           type: number
 *           format: double
 *           readOnly: true
 *           description: Precio del producto registrado en el detalle de la venta
 *           example: 4500
 */

/**
 * @swagger
 * /api/sale-detail:
 *   get:
 *     summary: Obtener todos los detalles de venta
 *     tags: [SaleDetails]
 *     responses:
 *       200:
 *         description: Detalles de venta obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale details retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/SaleDetail'
 */
router.get('/', SaleDetailController.getAllSaleDetails)

/**
 * @swagger
 * /api/sale-detail/{id}:
 *   get:
 *     summary: Obtener un detalle de venta por su identificador
 *     tags: [SaleDetails]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del detalle de venta
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Detalle de venta obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale detail retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/SaleDetail'
 *       404:
 *         description: Detalle de venta no encontrado
 */
router.get('/:id', SaleDetailController.getSaleDetailById)

/**
 * @swagger
 * /api/sale-detail:
 *   post:
 *     summary: Crear un detalle de venta
 *     tags: [SaleDetails]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - saleId
 *               - productId
 *               - quantity
 *             properties:
 *               saleId:
 *                 type: integer
 *                 example: 1
 *               productId:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       201:
 *         description: Detalle de venta creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale detail created successfully
 *                 data:
 *                   $ref: '#/components/schemas/SaleDetail'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', SaleDetailController.createSaleDetail)

/**
 * @swagger
 * /api/sale-detail/{id}:
 *   put:
 *     summary: Actualizar un detalle de venta
 *     tags: [SaleDetails]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del detalle de venta
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - saleId
 *               - productId
 *               - quantity
 *             properties:
 *               saleId:
 *                 type: integer
 *                 example: 1
 *               productId:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 3
 *     responses:
 *       200:
 *         description: Detalle de venta actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale detail updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/SaleDetail'
 *       404:
 *         description: Detalle de venta no encontrado
 */
router.put('/:id', SaleDetailController.updateSaleDetail)

/**
 * @swagger
 * /api/sale-detail/{id}:
 *   delete:
 *     summary: Eliminar un detalle de venta
 *     tags: [SaleDetails]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del detalle de venta
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Detalle de venta eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale detail deleted successfully
 *       404:
 *         description: Detalle de venta no encontrado
 */
router.delete('/:id', SaleDetailController.deleteSaleDetail)

module.exports = router