const express = require('express')
const swaggerUi = require('swagger-ui-express')

const DatabaseSync = require('./src/config/sync')
const swaggerSpec = require('./src/config/swagger')

const productRoutes = require('./src/routes/product.routes')
const providerRoutes = require('./src/routes/provider.routes')
const userRoutes = require('./src/routes/user.routes')
const saleRoutes = require('./src/routes/sale.routes')
const saleDetailRoutes = require('./src/routes/saleDetail.routes')

const app = express()
const PORT = 3000

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

app.use('/api/product', productRoutes)
app.use('/api/provider', providerRoutes)
app.use('/api/user', userRoutes)
app.use('/api/sale', saleRoutes)
app.use('/api/sale-detail', saleDetailRoutes)

app.get('/', (req, res) => {
    res.json({
        message: 'Supermarket server is running successfully'
    })
})

async function startServer() {
    try {
        await DatabaseSync.sync()

        app.listen(PORT, () => {
            console.log(`Server running at http://localhost:${PORT}`)
            console.log(`Swagger documentation at http://localhost:${PORT}/api-docs`)
        })
    } catch (error) {
        console.log('Error starting the server:', error)
    }
}

startServer()