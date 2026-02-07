const request = require('supertest')
const app = require('./app')
describe('GET routes', () => {
  test('GET /', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toBe(200)
    expect(res.text).toBe('Home page')
  })
  test('GET /about', async () => {
    const res = await request(app).get('/about')
    expect(res.text).toBe('about page')
  })
  test('GET /contact', async () => {
    const res = await request(app).get('/contact')
    expect(res.text).toBe('contact page')
  })
  test('GET /product', async () => {
    const res = await request(app).get('/product')
    expect(res.text).toBe('product page')
  })
})