const req = require('supertest')
const API_URL = process.env.API_URL


let getAcessToken = (user, pass) => {
    return req('http://127.0.0.1:3000/api')
        .post('/login')
        .send({
            "username": user,
            "password": pass
        })
        .set("Accept", "application/json")
        .then(response => {
            return response.body.accessToken
        })
}

module.exports = { getAcessToken }