const { Provider } = require('../models')

class ProviderService {

    static async getAllProviders() {
        return await Provider.findAll({
            order: [['name', 'ASC']]
        })
    }

    static async getProviderById(id) {
        const provider = await Provider.findByPk(id)

        if (!provider) {
            throw new Error('Provider not found')
        }

        return provider
    }

    static async createProvider(providerData) {
        const { name, phone, email, city } = providerData

        const provider = await Provider.create({
            name,
            phone,
            email,
            city
        })

        return provider
    }

    static async updateProvider(id, providerData) {
        const provider = await Provider.findByPk(id)

        if (!provider) {
            throw new Error('Provider not found')
        }

        const { name, phone, email, city } = providerData

        const updatedData = {
            name,
            phone,
            email,
            city
        }

        await provider.update(updatedData)

        return provider
    }

    static async deleteProvider(id) {
        const provider = await Provider.findByPk(id)

        if (!provider) {
            throw new Error('Provider not found')
        }

        await provider.destroy()

        return {
            message: 'Provider deleted successfully'
        }
    }
}

module.exports = ProviderService