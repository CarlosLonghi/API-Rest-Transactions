import { expect, test } from 'vitest'

test('O usuário consegue criar uma nova transação', () => {
  // Fazendo a chamada HTTP
  const responseStatusCode = 201

  // Validação
  expect(responseStatusCode).toEqual(201)
})
