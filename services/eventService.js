const { eventModel } = require('../database')

const eventService = {
    create: async (payload) => {
        console.log(payload)
        try {
            const event = {
                user_id: payload.decodedToken.id,
                name: payload.name,
                description: payload.description
            }

            let error = null
            let result = await eventModel.create(event)
            return result
        } catch (error) {
            console.log(error)
            return error
        }
    }
}

module.exports = eventService