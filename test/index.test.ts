import request from 'supertest'
import server from '../src'
import { StatusCodes } from 'http-status-codes'

describe('GET /backend/', () => {
  it('should return a healthcheck response', async () => {
    const res = await request(server).get('/backend/')

    expect(res.statusCode).toBe(StatusCodes.OK)
    expect(res.text.length).toBeGreaterThan(0)
  })
})

describe('GET /backend/random', () => {
  it('should return a random number', async () => {
    const res1 = await request(server).get('/backend/random')
    expect(res1.statusCode).toBe(StatusCodes.OK)
    expect(isInteger(res1.text))

    const res2 = await request(server).get('/backend/random')
    expect(res2.statusCode).toBe(StatusCodes.OK)
    expect(isInteger(res2.text))

    expect(res1.text).not.toBe(res2.text)
  })
})

const isInteger = (value: string) => /^\d+$/.test(value)

// Cleanup after tests
afterAll((done) => {
  server.close(done)
})
