let app = require('../server.js')
let testServer = require('supertest');

describe('test the root path', () => {
    test('should respond 200 to logout', (done) => {
        testServer(app).post('/api/user/logout').then(response => {
            expect(response.statusCode).toBe(200);
            done();
        })
    })
    //USER IS NOT LOGGED IN-- RESPOSNE SHOULD BE 403
    test('should respond 403 when not logged in', (done) => {
        testServer(app).get('/api/user').then(response => {
            expect(response.statusCode).toBe(403);
            done();
        })
    })
})