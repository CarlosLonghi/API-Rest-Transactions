import { test, beforeAll, afterAll, describe } from 'vitest'
import request from 'supertest'
import { app } from '../src/app'

describe('Transactions routes', () => {
  // Await app is ready to run tests
  beforeAll(async () => {
    await app.ready()
  })

  // Close app after run tests
  afterAll(async () => {
    await app.close()
  })

  test('User can create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 1000,
        type: 'credit',
      })
      .expect(201)
  })
})
