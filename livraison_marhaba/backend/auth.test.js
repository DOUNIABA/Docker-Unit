const supertest = require('supertest')
const app = require('./index');
describe('Login function', () => {
  it('Valid account', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "dounia0bahassane@gmail.com",
        password: "123",
      })
    expect(res.statusCode).toEqual(200)
  })

  it('Invalid account', async () => {
    const res = await supertest(app)
      .post('/api/auth/login')
      .send({
        email: "dounhassane@gmail.com",
        password: "1245@@",
      })
    expect(res.statusCode).toEqual(400)
  })
})

describe('register function', () => {
  it('email already exist', async () => {
    const res = await supertest(app)
      .post('/api/auth/register')
      .send({
        name:"dounia",
        email: "dounia0bahassane@gmail.com",
        password: "123",
      })
    expect(res.statusCode).toEqual(400)
  })
})