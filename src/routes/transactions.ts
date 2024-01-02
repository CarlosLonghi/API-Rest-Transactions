import { FastifyInstance } from 'fastify'
import { knex } from '../database'

// Todo plugin do Fastify precisa obrigatoriamente ser uma função assíncrona.
export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transaction = await knex('transactions')
      .insert({
        id: crypto.randomUUID(),
        title: 'Primeira Transação',
        amount: 100,
      })
      .returning('*')

    return transaction
  })
}
