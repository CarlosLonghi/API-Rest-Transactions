import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

app.get('/hello', async () => {
  const tables = await knex('sqlite_schema').select('*')

  return tables
})

const listenPort = 3333
app
  .listen({
    port: listenPort,
  })
  .then(() => {
    console.log(`HTTP Server is Running on Port: ${listenPort}`)
  })
