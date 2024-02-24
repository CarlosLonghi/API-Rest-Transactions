import { execSync } from 'node:child_process'
import { app } from '../src/app'
import { expect, it, beforeAll, afterAll, describe, beforeEach } from 'vitest'
import request from 'supertest'

describe('Transactions routes', () => {
  // Await app is ready to run tests
  beforeAll(async () => {
    await app.ready()
  })

  // Close app after run tests
  afterAll(async () => {
    await app.close()
  })

  beforeEach(() => {
    execSync('npm run knex migrate:rollback --all')
    execSync('npm run knex migrate:latest')
  })

  // Um teste NÃO pode depender de outro teste!

  // it types: it.skip(test is skiped), it.todo(test to do), it.only(run single test),
  it('should be able to create a new transaction', async () => {
    await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 1000,
        type: 'credit',
      })
      .expect(201)
  })

  it('should be able to list all transactions', async () => {
    const createTransactionResponse = await request(app.server)
      .post('/transactions')
      .send({
        title: 'New transaction',
        amount: 1000,
        type: 'credit',
      })

    const cookies = createTransactionResponse.get('Set-Cookie')

    const listTransactionsResponse = await request(app.server)
      .get('/transactions')
      .set('Cookie', cookies)
      .expect(200)

    expect(listTransactionsResponse.body.transactions).toEqual([
      expect.objectContaining({
        title: 'New transaction',
        amount: 1000,
      }),
    ])
  })
})
