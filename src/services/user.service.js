const { User } = require('../models')
const { Op } = require('sequelize')

class UserService {

    static async getAllUsers() {
        return await User.findAll({
            order: [['name', 'ASC']]
        })
    }

    static async getUserById(id) {
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error('User not found')
        }

        return user
    }

    static async createUser(userData) {
        const { name, email, role } = userData

        const existingUser = await User.findOne({
            where: { email }
        })

        if (existingUser) {
            throw new Error('Email already exists')
        }

        const user = await User.create({
            name,
            email,
            role
        })

        return user
    }

    static async updateUser(id, userData) {
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error('User not found')
        }

        const { name, email, role } = userData

        if (email) {
            const existingEmail = await User.findOne({
                where: {
                    email,
                    id: {
                        [Op.ne]: id
                    }
                }
            })

            if (existingEmail) {
                throw new Error('Email already exists')
            }
        }

        const updatedData = {
            name,
            email,
            role
        }

        await user.update(updatedData)

        return user
    }

    static async deleteUser(id) {
        const user = await User.findByPk(id)

        if (!user) {
            throw new Error('User not found')
        }

        await user.destroy()

        return {
            message: 'User deleted successfully'
        }
    }
}

module.exports = UserService