
const supertest = require('supertest')
const app = require('./index');
describe('Login function', () => {
  it('login', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "dounia0bahassane@gmail.com",
        password: "123",
      })
    expect(res.statusCode).toEqual(200)
  })


  it('Erreur Login', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "dounhassane@gmail.com",
        password: "1245",
      })
    expect(res.statusCode).toEqual(400)
  })
})
