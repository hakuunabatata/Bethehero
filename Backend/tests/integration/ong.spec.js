const app = require('../../src/app')
const request = require('supertest')
const connection = require('../../src/database/connections')

describe('ONG', () => {
    it ('should be able to create a new ONG', async () => {

        beforeEach(async ()=> {
            await connection.migrate.latest()
        })
        const response = await request(app)
            .post('/ongs')
            .send({
                "name": "Jairzinho",
                "email": "gskajso@kadhfadi.com",
                "zipzorp": "55119867721",
                "city": "Varzea Paulista",
                "state": "SP"
            })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})