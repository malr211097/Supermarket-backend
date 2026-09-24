const express = require('express')
const ProviderController = require('../controllers/provider.controllers')

const router = express.Router()

/**
 * @swagger
 * tags:
 *   - name: Providers
 *     description: Administración de proveedores del supermercado
 *
 * components:
 *   schemas:
 *     Provider:
 *       type: object
 *       required:
 *         - name
 *         - phone
 *         - email
 *         - city
 *       properties:
 *         id:
 *           type: integer
 *           readOnly: true
 *           example: 1
 *         name:
 *           type: string
 *           example: Distribuidora Central
 *         phone:
 *           type: string
 *           example: "3001234567"
 *         email:
 *           type: string
 *           format: email
 *           example: ventas@distribuidoracentral.com
 *         city:
 *           type: string
 *           example: Manizales
 */

/**
 * @swagger
 * /api/provider:
 *   get:
 *     summary: Obtener todos los proveedores
 *     tags: [Providers]
 *     responses:
 *       200:
 *         description: Proveedores obtenidos correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Providers retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Provider'
 */
router.get('/', ProviderController.getAllProviders)

/**
 * @swagger
 * /api/provider/{id}:
 *   get:
 *     summary: Obtener un proveedor por su identificador
 *     tags: [Providers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del proveedor
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Proveedor obtenido correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Provider retrieved successfully
 *                 data:
 *                   $ref: '#/components/schemas/Provider'
 *       404:
 *         description: Proveedor no encontrado
 */
router.get('/:id', ProviderController.getProviderById)

/**
 * @swagger
 * /api/provider:
 *   post:
 *     summary: Crear un proveedor
 *     tags: [Providers]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Provider'
 *           example:
 *             name: Distribuidora Central
 *             phone: "3001234567"
 *             email: ventas@distribuidoracentral.com
 *             city: Manizales
 *     responses:
 *       201:
 *         description: Proveedor creado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Provider created successfully
 *                 data:
 *                   $ref: '#/components/schemas/Provider'
 *       400:
 *         description: Datos inválidos
 */
router.post('/', ProviderController.createProvider)

/**
 * @swagger
 * /api/provider/{id}:
 *   put:
 *     summary: Actualizar un proveedor
 *     tags: [Providers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del proveedor
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Provider'
 *           example:
 *             name: Distribuidora Nacional
 *             phone: "3109876543"
 *             email: ventas@distribuidoranacional.com
 *             city: Pereira
 *     responses:
 *       200:
 *         description: Proveedor actualizado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Provider updated successfully
 *                 data:
 *                   $ref: '#/components/schemas/Provider'
 *       404:
 *         description: Proveedor no encontrado
 */
router.put('/:id', ProviderController.updateProvider)

/**
 * @swagger
 * /api/provider/{id}:
 *   delete:
 *     summary: Eliminar un proveedor
 *     tags: [Providers]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Identificador del proveedor
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Proveedor eliminado correctamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Provider deleted successfully
 *       404:
 *         description: Proveedor no encontrado
 */
router.delete('/:id', ProviderController.deleteProvider)

module.exports = router