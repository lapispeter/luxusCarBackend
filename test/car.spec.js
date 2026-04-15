import request from 'supertest'
import app from '../app/app.js'

describe('/api/cars', () => {
    const restype= 'application/json; charset=utf-8'
    var token = null

    it('post /cars ', async () => {
      await request(app)
        .post('/api/cars')
        .set('Accept', 'application/json')
        .send({
            name: 'Something'
        })
        .expect('Content-Type', restype)
        .expect(201)

    })
    it('get /cars', async () => {
      await request(app)
        .get('/api/cars')
        .set('Accept', 'application/json')
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('put /cars/:id', async () => {
      await request(app)
        .put('/api/cars/1')
        .set('Accept', 'application/json')
        .send({
            name: 'Another'
        })
        .expect('Content-Type', restype)
        .expect(200)
    })
    it('delete /cars/:id', async () => {
      await request(app)
        .delete('/api/cars/1')
        .set('Accept', 'application/json')
        .expect(200)
    })
})
