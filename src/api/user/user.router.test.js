import test from 'ava'
import request from 'supertest-as-promised'
import mockgoose from 'mockgoose'
import express from '../../config/express'
import mongoose from '../../config/mongoose'
import routes, { User } from '.'

const app = () => express(routes)

test.before(async (t) => {
  await mockgoose(mongoose)
  await mongoose.connect('')
})

test.beforeEach(async (t) => {
  const user = await User.create({})
  t.context = { ...t.context, user }
})

test.afterEach.always(async (t) => {
  await User.remove()
})

test.serial('POST /users 201', async (t) => {
  const { status, body } = await request(app())
    .post('/')
    .send({ username: 'test', name: 'test', email: 'test', password: 'test' })
  t.true(status === 201)
  t.true(typeof body === 'object')
  t.true(body.username === 'test')
  t.true(body.name === 'test')
  t.true(body.email === 'test')
  t.true(body.password === 'test')
})

test.serial('GET /users 200', async (t) => {
  const { status, body } = await request(app())
    .get('/')
  t.true(status === 200)
  t.true(Array.isArray(body))
})

test.serial('GET /users/:id 200', async (t) => {
  const { user } = t.context
  const { status, body } = await request(app())
    .get(`/${user.id}`)
  t.true(status === 200)
  t.true(typeof body === 'object')
  t.true(body.id === user.id)
})

test.serial('GET /users/:id 404', async (t) => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
  t.true(status === 404)
})

test.serial('PUT /users/:id 200', async (t) => {
  const { user } = t.context
  const { status, body } = await request(app())
    .put(`/${user.id}`)
    .send({ username: 'test', name: 'test', email: 'test', password: 'test' })
  t.true(status === 200)
  t.true(typeof body === 'object')
  t.true(body.id === user.id)
  t.true(body.username === 'test')
  t.true(body.name === 'test')
  t.true(body.email === 'test')
  t.true(body.password === 'test')
})

test.serial('PUT /users/:id 404', async (t) => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ username: 'test', name: 'test', email: 'test', password: 'test' })
  t.true(status === 404)
})

test.serial('DELETE /users/:id 204', async (t) => {
  const { user } = t.context
  const { status } = await request(app())
    .delete(`/${user.id}`)
  t.true(status === 204)
})

test.serial('DELETE /users/:id 404', async (t) => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
  t.true(status === 404)
})
