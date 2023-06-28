const req = require('supertest')
const { getAcessToken } = require('../utils/request');
const { response } = require('express');
const API_URL = process.env.API_URL

describe('Should list User', () => {
    let token

    beforeAll(async () => {
        token = await getAcessToken('admin', 'admin')
    })
    it('Should get acess token', async () => {
        await req('http://127.0.0.1:3000/api')
            .get('/users')
            .set('Accept', 'application/json')
            .set('Authorization', `Bearer ${token}`)
            .then(response => {
                expect(response.statusCode).toEqual(200)
                expect(response.body).toBeInstanceOf(Array)
            })
    });
});