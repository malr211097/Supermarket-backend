const express = require('express')
const SaleController = require('../controllers/sale.controllers')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   - name: Sales
 *     description: Administración de ventas del supermercado
 *
 * components:
 *   schemas:
 *     Sale:
 *       type: object
 *       required:
 *         - userId
 *         - date
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         userId:
 *           type: integer
 *           example: 1
 *         date:
 *           type: string
 *           format: date
 *           example: "2026-09-24"
 *         total:
 *           type: number
 *           format: double
 *           readOnly: true
 *           description: Total calculado automáticamente a partir de los detalles de la venta
 *           example: 9000
 */

/**
 * @swagger
 * /api/sale:
 *   get:
 *     summary: Obtener todas las ventas
 *     tags: [Sales]
 *     responses:
 *       200:
 *         description: Ventas obtenidas correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sales retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Sale'
 */
router.get('/', SaleController.getAllSales)

/**
 * @swagger
 * /api/sale/{id}:
 *   get:
 *     summary: Obtener una venta por su identificador
 *     tags: [Sales]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador de la venta
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Venta obtenida correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 *       404:
 *         description: Venta no encontrada
 */
router.get('/:id', SaleController.getSaleById)

/**
 * @swagger
 * /api/sale:
 *   post:
 *     summary: Crear una venta
 *     tags: [Sales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - date
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2026-09-24"
 *     responses:
 *       201:
 *         description: Venta creada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', SaleController.createSale)

/**
 * @swagger
 * /api/sale/{id}:
 *   put:
 *     summary: Actualizar una venta
 *     tags: [Sales]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador de la venta
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
 *               - userId
 *               - date
 *             properties:
 *               userId:
 *                 type: integer
 *                 example: 1
 *               date:
 *                 type: string
 *                 format: date
 *                 example: "2026-09-25"
 *     responses:
 *       200:
 *         description: Venta actualizada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Sale'
 *       404:
 *         description: Venta no encontrada
 */
router.put('/:id', SaleController.updateSale)

/**
 * @swagger
 * /api/sale/{id}:
 *   delete:
 *     summary: Eliminar una venta
 *     tags: [Sales]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador de la venta
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Venta eliminada correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Sale deleted successfully
 *       404:
 *         description: Venta no encontrada
 */
router.delete('/:id', SaleController.deleteSale)

module.exports = router