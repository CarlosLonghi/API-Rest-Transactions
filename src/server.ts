import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

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

const listenPort = 3333
app
  .listen({
    port: listenPort,
  })
  .then(() => {
    console.log(`HTTP Server is Running on Port: ${listenPort}`)
  })
