import fastify from "fastify";

const app = fastify()

app.get('/hello', () => {
    return 'Hello World Teste'
})

const listenPort = 3333
app.listen({
    port: listenPort,
}).then(() => {
    console.log(`HTTP Server is Running on Port: ${listenPort}`)
})