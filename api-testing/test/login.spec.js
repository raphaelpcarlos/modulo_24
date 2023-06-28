const { response } = require('express');
const req = require('supertest')
const API_URL = process.env.API_URL

describe('User Login', () => {

    it('Should get acess token', () => {
        req('http://127.0.0.1:3000/api')
            .post('/login')
            .send({
                "username": "admin",
                "password": "admin"
            })
            .set("Accept", "application/json")
            .then(response => {
                expect(response.statusCode).toEqual(201)
                expect(response.body.acessToken).not.toBe(undefined)
            })
    });
});