let app = require('../server.js')
let testServer = require('supertest');

describe('test the root path', () => {
    test('should respond 200 to logout', async () => {
        // testServer(app).post('/api/user/logout').then(response => {
        //     expect(response.statusCode).toBe(200);
        //     done();
        // })
        let response = await testServer(app).post('/api/user/logout')
        expect(response.statusCode).toBe(200);
    })
    //USER IS NOT LOGGED IN-- RESPOSNE SHOULD BE 403
    //PROMISE WILL REQ. DONE BUT WITH ASYNC AWAIT DONE IS NOT NEC.
    test('should respond 403 when not logged in', (done) => {
        testServer(app).get('/api/user').then(response => {
            expect(response.statusCode).toBe(403);
            done();
        })
    })
    test('/user should return user info when authenticated', async() => {
        //login 
        //agent remembers cookies and allows test to hold onto cookie for the login
        let agent = testServer.agent(app);
        const response = await agent.post('/api/user/login')
        //best practice is use a test database with test usernames and database else use a .env
                                    .send({username: 'pache', password: '9876'})
        expect(response.statusCode).toBe(200); 
        //get to 'api/user'
        const userResponse = await agent.get('/api/user')
        expect(userResponse.statusCode).toBe(200);

    })
})