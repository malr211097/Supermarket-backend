const express = require('express')
const ProductController = require('../controllers/product.controllers')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Administración de productos del supermercado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - price
 *         - stock
 *         - providerId
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Arroz blanco 1 kg
 *         description:
 *           type: string
 *           example: Arroz blanco empacado de un kilogramo
 *         price:
 *           type: number
 *           format: double
 *           example: 5000
 *         stock:
 *           type: integer
 *           example: 45
 *         providerId:
 *           type: integer
 *           example: 1
 */

/**
 * @swagger
 * /api/product:
 *   get:
 *     summary: Obtener todos los productos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Productos obtenidos correctamente
 */
router.get('/', ProductController.getAllProducts)

/**
 * @swagger
 * /api/product/{id}:
 *   get:
 *     summary: Obtener un producto por su identificador
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto obtenido correctamente
 *       500:
 *         description: Producto no encontrado
 */
router.get('/:id', ProductController.getProductById)

/**
 * @swagger
 * /api/product:
 *   post:
 *     summary: Crear un producto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Producto creado correctamente
 *       500:
 *         description: Error al crear el producto
 */
router.post('/', ProductController.createProduct)

/**
 * @swagger
 * /api/product/{id}:
 *   put:
 *     summary: Actualizar un producto
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Producto actualizado correctamente
 *       500:
 *         description: Error al actualizar el producto
 */
router.put('/:id', ProductController.updateProduct)

/**
 * @swagger
 * /api/product/{id}:
 *   delete:
 *     summary: Eliminar un producto
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del producto
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Producto eliminado correctamente
 *       500:
 *         description: Error al eliminar el producto
 */
router.delete('/:id', ProductController.deleteProduct)

module.exports = router