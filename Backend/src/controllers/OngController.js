const generateUniqueid = require('../utils/generateUniqueid')
const connection = require('../database/connections')

module.exports = {
    async index(request, response)  {
        const ongs = await connection('ongs').select('*')
        return response.json(ongs)
    },

    async create(request, response) {
        const { name, email, zipzorp, city, state } = request.body

        const id = generateUniqueid()
    
        await connection('ongs').insert({
            id, name, email, zipzorp, city, state
        })
    
        return response.json({ id })
    }
}